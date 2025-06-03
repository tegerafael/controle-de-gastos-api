import { ApiProperty } from '@nestjs/swagger';
import { CategoriaGasto } from '@prisma/client';
import { IsString, IsNotEmpty, IsOptional, IsDate, IsEnum, IsNumber } from 'class-validator';

export class GastoResDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  data: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEnum(CategoriaGasto)
  categoria: CategoriaGasto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_usu_fk: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  criadoEm: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  atualizadoEm: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  deletadoEm?: Date;
}
