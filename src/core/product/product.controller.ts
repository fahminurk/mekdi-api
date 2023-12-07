import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  async createProduct(@Body() data: Prisma.ProductCreateInput) {
    return this.productService.create(data);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    const checkCategory = await this.productService.getById(id);
    if (!checkCategory) throw new NotFoundException('Category not found');
    return this.productService.delete(id);
  }

  @Patch(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: Prisma.ProductUpdateInput,
  ) {
    const checkCategory = await this.productService.getById(id);
    if (!checkCategory) throw new NotFoundException('Category not found');
    return this.productService.update(id, data);
  }
}
