import { Injectable } from '@nestjs/common';
import { GastoRepositoryInterface } from './gasto.repository.interface';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { GastoResDto } from '../dtos/response/gasto-res.dto';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';
import { GastosInformacoesDto } from '../dtos/gastos-informacoes.dto';

@Injectable()
export class GastoRepository implements GastoRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async buscarTodos(): Promise<GastoResDto[]> {
    return this.prismaService.gasto.findMany();
  }

  public async buscarPorId(id: string): Promise<GastoResDto> {
    return this.prismaService.gasto.findFirst({
      where: { id },
    });
  }

  public async criar(data: GastoReqDto): Promise<GastoResDto> {
    return this.prismaService.gasto.create({
      data,
    });
  }

  public async atualizar(id: string, data: AtualizarGastoReqDto): Promise<GastoResDto> {
    return this.prismaService.gasto.update({
      where: { id },
      data,
    });
  }

  public async deletar(id: string): Promise<void> {
    await this.prismaService.gasto.delete({
      where: { id },
    });
  }

  public async buscarInformacoesDetalhadas(id_usu_fk: string): Promise<GastosInformacoesDto[]> {
    return this.prismaService.gasto.findMany({
      select: {
        valor: true,
        usuario: {
          select: {
            nome: true,
          },
        },
        descricao: true,
        categoria: true,
      },
      where: { id_usu_fk },
    });
  }
}
