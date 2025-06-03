import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class UsuarioResDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  senha: string;

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
