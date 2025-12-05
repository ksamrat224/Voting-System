import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PollsCronService } from 'src/cron/polls-cron.service';
import { PollsGateway } from './polls.gateway';


@Module({
  controllers: [PollsController],
  providers: [PollsService, PollsCronService, PrismaService,PollsGateway], 
  exports: [PollsService, PrismaService,PollsGateway],
})
export class PollsModule {}
