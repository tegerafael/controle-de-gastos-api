import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { GastosPorCategoriaDto } from './gastos-por-categoria.dto';
import { CategoriaGasto } from '@prisma/client';

export class GastosInformacoesDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  usuario: {
    nome: string;
  };

  @ApiProperty({ type: [CategoriaGasto] })
  @IsArray()
  @IsNotEmpty()
  categoria: CategoriaGasto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
