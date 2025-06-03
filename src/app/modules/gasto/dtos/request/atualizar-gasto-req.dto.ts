import { PartialType } from '@nestjs/mapped-types';
import { GastoReqDto } from './gasto-req.dto';

export class AtualizarGastoReqDto extends PartialType(GastoReqDto) {}
