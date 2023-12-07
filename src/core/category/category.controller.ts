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
import { CategoryService } from './category.service';
import { Prisma } from '@prisma/client';
import { CreateCategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategory() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.getById(id);
  }

  @Post()
  async createCategory(@Body() data: CreateCategoryDto) {
    return this.categoryService.create(data);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    const checkCategory = await this.categoryService.getById(id);
    if (!checkCategory) throw new NotFoundException('Category not found');
    return this.categoryService.delete(id);
  }

  @Patch(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: Prisma.CategoryUpdateInput,
  ) {
    const checkCategory = await this.categoryService.getById(id);
    if (!checkCategory) throw new NotFoundException('Category not found');
    return this.categoryService.update(id, data);
  }
}
