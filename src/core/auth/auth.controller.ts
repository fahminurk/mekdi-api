import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
