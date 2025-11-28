import { Module } from '@nestjs/common';
import { PollOptionsService } from './poll-options.service';
import { PollOptionsController } from './poll-options.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [PollOptionsController],
  providers: [PollOptionsService, PrismaService],
})
export class PollOptionsModule {}
