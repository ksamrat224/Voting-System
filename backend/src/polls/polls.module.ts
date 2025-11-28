import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PollsCronService } from 'src/cron/polls-cron.service';


@Module({
  controllers: [PollsController],
  providers: [PollsService, PollsCronService, PrismaService], 
  exports: [PollsService, PrismaService],
})
export class PollsModule {}
