import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GastoControllerInterface } from './gasto.controller.interface';
import { GastoResDto } from '../dtos/response/gasto-res.dto';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';
import { GastoService } from '../services/gasto.service';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';
import { AtualizarGastoReqDto } from '../dtos/request/atualizar-gasto-req.dto';

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
    description: 'ID do usuário a ser buscado',
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
  @ApiOperation({ summary: 'Criar um novo usuário' })
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
  @ApiOperation({ summary: 'Atualizar um usuário existente' })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser atualizado',
    required: true,
    type: String,
  })
  @ApiBody({
    description: 'Dados do usuário a serem atualizados',
    type: GastoReqDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: GastoResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  public async atualizar(@Param('id') id: string, @Body() gasto: AtualizarGastoReqDto): Promise<GastoResDto> {
    try {
      return this.gastoService.atualizar(id, gasto);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um usuário pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser deletado',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 204,
    description: 'Usuário deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  @HttpCode(204)
  public async deletar(@Param('id') id: string): Promise<void> {
    try {
      return this.gastoService.deletar(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }
}
