import { ApiProperty } from '@nestjs/swagger';
import { CategoriaGasto } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { EUuidExiste } from 'src/app/commons/decorators/uuid-existe.decorator';

export class GastoReqDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

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
  @Type(() => Date)
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
  @EUuidExiste()
  id_usu_fk: string;
}
