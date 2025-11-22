import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createVoteDto: CreateVoteDto) {
    const pollOption = await this.prisma.pollOption.findUnique({
      where: { id: createVoteDto.pollOptionId },
    });
    if (!pollOption || pollOption.pollId !== createVoteDto.pollId) {
      throw new NotFoundException('Poll option not found for the given poll');
    }

    const poll = await this.prisma.poll.findUnique({
      where: { id: createVoteDto.pollId },
    });
    if (!poll) {
      throw new NotFoundException('Poll not found');
    }
    if (!poll.isActive) {
      throw new BadRequestException('Poll is not active');
    }

    const existing = await this.prisma.vote.findUnique({
      where: {
        userId_pollId: {
          userId: createVoteDto.userId,
          pollId: createVoteDto.pollId,
        },
      },
    });
    if (existing) {
      throw new BadRequestException('User has already voted in this poll');
    }

    return this.prisma.vote.create({
      data: createVoteDto,
    });
  }

  async findAll(userId: number) {
    return this.prisma.vote.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const vote = await this.prisma.vote.findUnique({
      where: { id, userId },
    });
    if (!vote) {
      throw new NotFoundException('vote not found');
    }
    return vote;
  }

  async update(id: number, updateVoteDto: UpdateVoteDto) {
    await this.findOne(id, updateVoteDto.userId as number);
    return this.prisma.vote.update({
      where: { id, userId: updateVoteDto.userId },
      data: updateVoteDto,
    });
  }

  async remove(id: number, userId: number) {
    await this.findOne(id, userId);
    return this.prisma.vote.delete({
      where: { id, userId },
    });
  }
}
