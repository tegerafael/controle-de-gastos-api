import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GastoControllerInterface } from './gasto.controller.interface';
import { GastoResDto } from '../dtos/response/gasto-res.dto';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';
import { GastoService } from '../services/gasto.service';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';
import { InformacoesGastosResDto } from '../dtos/response/informacoes-gastos-res.dto';

@ApiTags('Gasto')
@Controller('gastos')
export class GastoController implements GastoControllerInterface {
  constructor(private readonly gastoService: GastoService) {}

  @Get('')
  @ApiOperation({ summary: 'Buscar todos os gastos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de gastos retornada com sucesso',
    type: [GastoResDto],
  })
  public async buscarTodos(): Promise<GastoResDto[]> {
    try {
      return this.gastoService.buscarTodos();
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um gasto pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do gasto a ser buscado',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Gasto encontrado com sucesso',
    type: GastoResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Gasto não encontrado',
  })
  public async buscarPorId(@Param('id') id: string): Promise<GastoResDto> {
    try {
      return this.gastoService.buscarPorId(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Post('')
  @ApiOperation({ summary: 'Criar um novo gasto' })
  @ApiResponse({
    status: 201,
    description: 'Gasto criado com sucesso',
    type: GastoReqDto,
  })
  public async criar(@Body() gasto: GastoReqDto): Promise<GastoResDto> {
    try {
      return this.gastoService.criar(gasto);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um gasto existente' })
  @ApiParam({
    name: 'id',
    description: 'ID do gasto a ser atualizado',
    required: true,
    type: String,
  })
  @ApiBody({
    description: 'Dados do gasto a serem atualizados',
    type: GastoReqDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Gasto atualizado com sucesso',
    type: GastoResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Gasto não encontrado',
  })
  public async atualizar(@Param('id') id: string, @Body() gasto: AtualizarGastoReqDto): Promise<GastoResDto> {
    try {
      return this.gastoService.atualizar(id, gasto);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um gasto pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do gasto a ser deletado',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 204,
    description: 'Gasto deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Gasto não encontrado',
  })
  @HttpCode(204)
  public async deletar(@Param('id') id: string): Promise<void> {
    try {
      return this.gastoService.deletar(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Get(':id/informacoes')
  @ApiOperation({ summary: 'Buscar informações detalhadas de gastos de um usuário pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário para buscar informações detalhadas de gastos',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Informações detalhadas de gastos do usuário retornadas com sucesso',
    type: GastoResDto,
  })
  public async buscarInformacoesDetalhadas(@Param('id') id: string): Promise<InformacoesGastosResDto> {
    try {
      return this.gastoService.buscarInformacoesDetalhadas(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }
}
