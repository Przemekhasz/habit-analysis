import { IsOptional, IsString } from "class-validator";

export class UpdateUserPostDto {
  @IsString()
  @IsOptional()
  public readonly title: string;

  @IsString()
  @IsOptional()
  public readonly description: string;
}
