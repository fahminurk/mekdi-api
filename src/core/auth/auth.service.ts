import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAccountDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: createAccountDto });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }
}
