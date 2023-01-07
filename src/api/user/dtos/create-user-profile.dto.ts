import { IsNumber, IsString } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  public readonly firstName: string;
  @IsString()
  public readonly lastName: string;
  @IsNumber()
  public readonly age: number;
  @IsString()
  public readonly dob: string;
}
