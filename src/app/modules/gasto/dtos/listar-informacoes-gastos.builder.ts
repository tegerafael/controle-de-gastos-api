import { Injectable } from '@nestjs/common';
import { InformacoesGastosResDto } from './response/informacoes-gastos-res.dto';
import { GastosInformacoesDto } from './gastos-informacoes.dto';

@Injectable()
export class ListarInformacoesGastosBuilder {
  build(gastos: GastosInformacoesDto[]): InformacoesGastosResDto {
    return {
      usuario: gastos[0].usuario.nome || '',
      total: gastos.reduce((soma, gasto) => soma + (gasto.valor || 0), 0),
      gastos: gastos.map((gasto) => ({
        descricao: gasto.descricao,
        categoria: gasto.categoria,
        total: gasto.valor || 0,
      })),
    };
  }
}
