import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/lib/prisma/prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  public async getAll(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  public async getById(id: string): Promise<Category> {
    return await this.prismaService.category.findUnique({ where: { id } });
  }

  public async create(data: Prisma.CategoryCreateInput) {
    return await this.prismaService.category.create({ data });
  }

  public async delete(id: string) {
    return await this.prismaService.category.delete({ where: { id } });
  }

  public async update(id: string, data: Prisma.CategoryUpdateInput) {
    return await this.prismaService.category.update({
      where: { id },
      data,
    });
  }
}
