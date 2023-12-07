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
import { hash } from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
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
  async createUser(@Body() data: CreateUserDto) {
    const checkUser = await this.userService.getByEmail(data.email);

    if (checkUser) throw new UnauthorizedException('User already exists');
    data.password = await hash(data.password, 10);
    return this.userService.create(data);
  }

  @Patch(':id')
  async updateUser(@Body() data: UpdateUserDto, @Param('id') id: string) {
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
