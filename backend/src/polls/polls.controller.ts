import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollsService } from './polls.service';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { Roles } from 'src/helpers/roles';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}
  @Roles('ADMIN')
  @Post()
  create(@Body() createPollDto: CreatePollDto) {
    return this.pollsService.create(createPollDto);
  }
  @Roles('ADMIN','USER')
  @Get()
  findAll() {
    return this.pollsService.findAll();
  }
  @Roles('ADMIN','USER')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollsService.findOne(+id);
  }
  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollDto: UpdatePollDto) {
    return this.pollsService.update(+id, updatePollDto);
  }
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollsService.remove(+id);
  }
}
