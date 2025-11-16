import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UsersService {
  //dependency injection
  constructor(private readonly prisma: PrismaClient) {}

  async create(createUserDto : CreateUserDto) {
    //will add unique email validation later
    return this.prisma.user.create({
      data:createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id:number) {
    const user = await this.prisma.user.findUnique({
      where: {id},
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async update (id:number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({
      where: {id},
      data: updateUserDto
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.user.delete({
      where:{id},
    });
  }
  }
