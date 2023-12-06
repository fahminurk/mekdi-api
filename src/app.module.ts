import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './core/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
