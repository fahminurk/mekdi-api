import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAll(): Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  public async getById(id: string): Promise<Product> {
    return await this.prismaService.product.findUnique({ where: { id } });
  }

  public async create(data: Prisma.ProductCreateInput) {
    return await this.prismaService.product.create({ data });
  }

  public async delete(id: string) {
    return await this.prismaService.product.delete({ where: { id } });
  }

  public async update(id: string, data: Prisma.ProductUpdateInput) {
    return await this.prismaService.product.update({
      where: { id },
      data,
    });
  }
}
