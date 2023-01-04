import { ApiProperty } from '@nestjs/swagger';
import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Trim()
  @IsEmail()
  @ApiProperty({ example: 'Johndeere@gmail.com' })
  public readonly email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ example: '12345678', minimum: 8 })
  public readonly password: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'optional username' })
  public readonly username: string;
}

export class LoginDto {
  @Trim()
  @IsEmail()
  @ApiProperty({ example: 'Johndeere@gmail.com' })
  public readonly email: string;

  @IsString()
  @ApiProperty({ example: '12345678', minimum: 8 })
  public readonly password: string;
}
