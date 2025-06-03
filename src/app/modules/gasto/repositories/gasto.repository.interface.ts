import { GastosInformacoesDto } from '../dtos/gastos-informacoes.dto';
import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { GastoResDto } from '../dtos/response/gasto-res.dto';

export interface GastoRepositoryInterface {
  buscarTodos(): Promise<GastoResDto[]>;

  buscarPorId(id: string): Promise<GastoResDto>;

  criar(data: GastoReqDto): Promise<GastoResDto>;

  atualizar(id: string, data: AtualizarGastoReqDto): Promise<GastoResDto>;

  deletar(id: string): Promise<void>;

  buscarInformacoesDetalhadas(id: string): Promise<GastosInformacoesDto[]>;
}
