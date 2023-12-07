import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  isSuperAdmin?: boolean;
}

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  fullname?: string;

  @IsBoolean()
  @IsOptional()
  isSuperAdmin?: boolean;
}

export class GetUserDTO {
  id: string;
  email: string;
  fullname: string;
  isSuperAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
