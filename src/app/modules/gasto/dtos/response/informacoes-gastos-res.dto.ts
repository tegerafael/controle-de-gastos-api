import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { GastosPorCategoriaDto } from '../gastos-por-categoria.dto';

export class InformacoesGastosResDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  total: number;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  gastos: GastosPorCategoriaDto[];
}
