import { IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly email: string;
}
