import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { GastoResDto } from '../dtos/response/gasto-res.dto';
import { InformacoesGastosResDto } from '../dtos/response/informacoes-gastos-res.dto';

export interface GastoControllerInterface {
  buscarTodos(): Promise<GastoResDto[]>;

  buscarPorId(id: string): Promise<GastoResDto>;

  criar(gasto: GastoReqDto): Promise<GastoResDto>;

  atualizar(id: string, gasto: AtualizarGastoReqDto): Promise<GastoResDto>;

  deletar(id: string): Promise<void>;

  buscarInformacoesDetalhadas(idw: string): Promise<InformacoesGastosResDto>;
}
