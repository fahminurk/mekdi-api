import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './core/auth/auth.module';
import { ProductModule } from './core/product/product.module';
import { CategoryModule } from './core/category/category.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
