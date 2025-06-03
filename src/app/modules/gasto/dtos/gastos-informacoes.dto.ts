import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
}
