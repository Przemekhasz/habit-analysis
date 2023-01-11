import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserProfileDto {
  @IsString()
  @IsOptional()
  public readonly firstName: string;

  @IsString()
  @IsOptional()
  public readonly lastName: string;

  @IsNumber()
  @IsOptional()
  public readonly age: number;

  @IsString()
  @IsOptional()
  public readonly dob: string;
}
