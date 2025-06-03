import { Injectable, NotFoundException } from '@nestjs/common';
import { GastoServiceInterface } from './gasto.service.interface';
import { GastoResDto } from '../dtos/response/gasto-res.dto';
import { GastoRepository } from '../repositories/gasto.repository';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';
import { InformacoesGastosResDto } from '../dtos/response/informacoes-gastos-res.dto';
import { ListarInformacoesGastosBuilder } from '../dtos/listar-informacoes-gastos.builder';

@Injectable()
export class GastoService implements GastoServiceInterface {
  constructor(
    private readonly listarInformacoesGastosBuilder: ListarInformacoesGastosBuilder,
    private readonly gastoRepository: GastoRepository,
  ) {}

  public async buscarTodos(): Promise<GastoResDto[]> {
    return this.gastoRepository.buscarTodos();
  }

  public async buscarPorId(id: string): Promise<GastoResDto> {
    return this.existe(id);
  }

  public async criar(gasto: GastoReqDto): Promise<GastoResDto> {
    return this.gastoRepository.criar(gasto);
  }

  public async atualizar(id: string, gasto: AtualizarGastoReqDto): Promise<GastoResDto> {
    await this.existe(id);

    return this.gastoRepository.atualizar(id, gasto);
  }

  public async deletar(id: string): Promise<void> {
    await this.existe(id);

    await this.gastoRepository.deletar(id);
  }

  public async buscarInformacoesDetalhadas(id: string): Promise<InformacoesGastosResDto> {
    const gastos = await this.gastoRepository.buscarInformacoesDetalhadas(id);

    if (!gastos || gastos.length === 0) {
      throw new NotFoundException(`Gastos não encontrados para o usuário informado`);
    }

    return this.listarInformacoesGastosBuilder.build(gastos);
  }

  private async existe(id: string): Promise<GastoResDto> {
    const gasto = await this.gastoRepository.buscarPorId(id);

    if (!gasto) {
      throw new NotFoundException(`Gasto não encontrado`);
    }

    return gasto;
  }
}
