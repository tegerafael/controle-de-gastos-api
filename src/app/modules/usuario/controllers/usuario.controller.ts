import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioControllerInterface } from './usuario.controller.interface';
import { UsuarioResDto } from '../dtos/response/usuario-res.dto';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioReqDto } from '../dtos/request/usuario-req.dto';
import { AtualizarUsuarioReqDto } from '../dtos/request/atualizar-usuario-req.dto';
import { AuthGuard } from 'src/app/commons/guards/auth.guard';

@ApiTags('Usuario')
@Controller('usuarios')
@UseGuards(AuthGuard)
export class UsuarioController implements UsuarioControllerInterface {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('')
  @ApiOperation({ summary: 'Buscar todos os usuários' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
    type: [UsuarioResDto],
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async buscarTodos(): Promise<UsuarioResDto[]> {
    try {
      return this.usuarioService.buscarTodos();
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um usuário pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do usuário a ser buscado',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: UsuarioResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async buscarPorId(@Param('id') id: string): Promise<UsuarioResDto> {
    try {
      return this.usuarioService.buscarPorId(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Post('')
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
    type: UsuarioResDto,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async criar(@Body() usuario: UsuarioReqDto): Promise<UsuarioResDto> {
    try {
      return this.usuarioService.criar(usuario);
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
    type: UsuarioReqDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: UsuarioResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async atualizar(@Param('id') id: string, @Body() usuario: AtualizarUsuarioReqDto): Promise<UsuarioResDto> {
    try {
      return this.usuarioService.atualizar(id, usuario);
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
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @HttpCode(204)
  public async deletar(@Param('id') id: string): Promise<void> {
    try {
      return this.usuarioService.deletar(id);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }
}
