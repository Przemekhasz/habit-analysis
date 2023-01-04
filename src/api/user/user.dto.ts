import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNameDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Johndeere', description: 'The name of the user' })
  public readonly username?: string;
}
