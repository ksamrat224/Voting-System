import { PrismaClient, Role, Poll, PollOption } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

type PollWithOptions = Poll & { options: PollOption[] };

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  // Seed Users
  const [alice, bob] = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Alice',
        mobile: '9800000003',
        email: 'alice1@example.com',
        password: hashedPassword,
        role: Role.USER,
      },
    }),
    prisma.user.create({
      data: {
        name: 'Bob',
        mobile: '9800000004',
        email: 'bob1@example.com',
        password: hashedPassword,
        role: Role.ADMIN,
      },
    }),
  ]);

  // Times for seeding polls (relative to now)
  const now = Date.now();
  const hour = 60 * 60 * 1000;

  const pollSeed = [
    // Polls for CRON job tests
    {
      title: 'Poll 1 Inactive, Should Activate',
      description: 'Inactive, startsAt in past',
      isActive: false,
      startsAt: new Date(now - 2 * hour), // 2 hours ago (should activate)
      endsAt: new Date(now + 2 * hour), // 2 hours from now
      options: ['A1', 'A2', 'A3'],
    },
    {
      title: 'Poll 2 Active, Will Close Soon',
      description: 'Active, endsAt soon',
      isActive: true,
      startsAt: new Date(now - 3 * hour), // 3 hours ago
      endsAt: new Date(now + 5 * 60 * 1000), // 5 min from now (should close by cron after time)
      options: ['B1', 'B2', 'B3'],
    },
    {
      title: 'Poll 3 Inactive, Scheduled Future',
      description: 'Starts in future',
      isActive: false,
      startsAt: new Date(now + 4 * hour), // 4 hours from now
      endsAt: new Date(now + 8 * hour),
      options: ['C1', 'C2', 'C3'],
    },
    {
      title: 'Poll 4 Active, Never Ending',
      description: 'Active and endsAt is null',
      isActive: true,
      startsAt: new Date(now - 6 * hour),
      endsAt: null,
      options: ['D1', 'D2'],
    },
    {
      title: 'Poll 5 Expired, Still Active (should close)',
      description: 'Expired poll should be closed',
      isActive: true,
      startsAt: new Date(now - 48 * hour),
      endsAt: new Date(now - 1 * hour), // Ended 1 hour ago (should close by cron)
      options: ['E1', 'E2', 'E3'],
    },
    {
      title: 'Poll 6 Scheduled Far Future',
      description: 'Starts in 2 days',
      isActive: false,
      startsAt: new Date(now + 48 * hour),
      endsAt: new Date(now + 72 * hour),
      options: ['F1', 'F2'],
    },
    {
      title: 'Poll 7 Ongoing',
      description: 'Active, ongoing',
      isActive: true,
      startsAt: new Date(now - 1 * hour),
      endsAt: new Date(now + 6 * hour),
      options: ['G1', 'G2', 'G3'],
    },
    {
      title: 'Poll 8 Ended Long Ago',
      description: 'Inactive, ended last week',
      isActive: false,
      startsAt: new Date(now - 168 * hour),
      endsAt: new Date(now - 120 * hour),
      options: ['H1', 'H2'],
    },
    {
      title: 'Poll 9 Starts and Never Ends, Scheduled Cron Should Activate',
      description: 'Inactive, startsAt is past, endsAt is null',
      isActive: false,
      startsAt: new Date(now - 10 * hour),
      endsAt: null,
      options: ['I1', 'I2', 'I3'],
    },
    {
      title: 'Poll 10 Ongoing with Long Duration',
      description: 'Active, ends in a week',
      isActive: true,
      startsAt: new Date(now - hour),
      endsAt: new Date(now + 168 * hour),
      options: ['J1', 'J2'],
    },
  ];

  // Create polls and their options
  const createdPolls: PollWithOptions[] = [];
  for (let i = 0; i < pollSeed.length; i++) {
    const pollData = pollSeed[i];
    const poll = await prisma.poll.create({
      data: {
        title: pollData.title,
        description: pollData.description,
        isActive: pollData.isActive,
        startsAt: pollData.startsAt,
        endsAt: pollData.endsAt,
        options: {
          create: pollData.options.map((name) => ({ name })),
        },
      },
      include: { options: true },
    });
    createdPolls.push(poll);
  }

  // Seed Votes and Feedbacks for first 5 polls
  for (let i = 0; i < 5; i++) {
    const poll = createdPolls[i];
    await prisma.vote.create({
      data: {
        userId: alice.id,
        pollId: poll.id,
        pollOptionId: poll.options[0].id,
      },
    });
    await prisma.vote.create({
      data: {
        userId: bob.id,
        pollId: poll.id,
        pollOptionId: poll.options[1].id,
      },
    });
    await prisma.feedback.create({
      data: {
        message: `Feedback for ${poll.title}`,
        userId: alice.id,
        pollId: poll.id,
      },
    });
  }

  console.log('Seeded 10 polls for cron job testing!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
