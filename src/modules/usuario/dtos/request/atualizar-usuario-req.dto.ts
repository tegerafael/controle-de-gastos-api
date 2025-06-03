import { PartialType } from '@nestjs/mapped-types';
import { UsuarioReqDto } from './usuario-req.dto';

export class AtualizarUsuarioReqDto extends PartialType(UsuarioReqDto) {}
