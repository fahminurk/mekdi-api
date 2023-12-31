import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { GetUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAll(): Promise<GetUserDTO[]> {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        fullname: true,
        isSuperAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  public async getById(id: string): Promise<GetUserDTO> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        fullname: true,
        isSuperAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  }

  public async getByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        fullname: true,
        isSuperAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  }

  public async create(data: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({ data });
  }

  public async update(id: string, data: Prisma.UserUpdateInput) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data,
    });
  }

  public async delete(id: string) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
