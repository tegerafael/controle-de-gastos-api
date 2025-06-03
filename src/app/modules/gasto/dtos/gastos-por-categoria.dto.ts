import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GastosPorCategoriaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  total: number;
}
