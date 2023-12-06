import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser() {
    return this.userService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput) {
    const checkUser = await this.userService.getByEmail(data.email);

    if (checkUser) throw new UnauthorizedException('User already exists');
    data.password = await hash(data.password, 10);
    return this.userService.create(data);
  }

  @Patch(':id')
  async updateUser(
    @Body() data: Prisma.UserUpdateInput,
    @Param('id') id: string,
  ) {
    const checkUser = await this.userService.getById(id);
    if (!checkUser) throw new NotFoundException('User not found');

    return this.userService.update(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const checkUser = await this.userService.getById(id);
    if (!checkUser) throw new NotFoundException('User not found');

    return this.userService.delete(id);
  }
}
