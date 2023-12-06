import { IsEmail, IsString, IsNotEmpty, Length } from 'class-validator';

export class GetAllDto {
  @IsEmail()
  public email: string;

  @IsString()
  public name: string;

  public password: string;
}
