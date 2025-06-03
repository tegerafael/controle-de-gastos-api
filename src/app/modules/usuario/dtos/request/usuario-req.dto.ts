import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { EmailEUnico } from 'src/app/commons/validators/email-e-unico.validator';

export class UsuarioReqDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @EmailEUnico()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  senha: string;
}
