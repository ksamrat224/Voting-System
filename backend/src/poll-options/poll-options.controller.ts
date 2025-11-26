import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollOptionsService } from './poll-options.service';
import { CreatePollOptionDto } from './dto/create-poll-option.dto';
import { UpdatePollOptionDto } from './dto/update-poll-option.dto';
import { Roles } from 'src/helpers/roles';

@Controller('poll-options')
export class PollOptionsController {
  constructor(private readonly pollOptionsService: PollOptionsService) {}
  @Roles('ADMIN')
  @Post()
  create(@Body() createPollOptionDto: CreatePollOptionDto) {
    return this.pollOptionsService.create(createPollOptionDto);
  }
  @Roles('ADMIN','USER')
  @Get()
  findAll() {
    return this.pollOptionsService.findAll();
  }
  @Roles('ADMIN','USER')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollOptionsService.findOne(+id);
  }
  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollOptionDto: UpdatePollOptionDto) {
    return this.pollOptionsService.update(+id, updatePollOptionDto);
  }
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollOptionsService.remove(+id);
  }
}
