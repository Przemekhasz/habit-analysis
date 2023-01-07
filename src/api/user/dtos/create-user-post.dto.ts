import { IsString } from 'class-validator';

export class CreateUserPostDto {
  @IsString()
  public readonly title: string;
  @IsString()
  public readonly description: string;
}
