import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthLoginDTO } from '../dto/request/auth-login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';
import { TokenDTO } from '../dto/response/token.dto';
import { AuthControllerInterface } from './auth.controller.interface';
import { AuthGuard } from 'src/app/commons/guards/auth.guard';
import { Usuario } from 'src/app/commons/decorators/usuario.decorator';
import { Response } from 'express';

@Controller('autenticacao')
@ApiTags('Autenticação')
export class AuthController implements AuthControllerInterface {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuario' })
  @ApiBody({
    type: AuthLoginDTO,
    description: 'Dados de autenticação do usuário',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário autenticado com sucesso',
    type: TokenDTO,
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  public async login(@Body() data: AuthLoginDTO): Promise<TokenDTO> {
    try {
      return this.authService.login(data);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }

  @Post('me')
  @ApiOperation({ summary: 'Obter informações do usuário autenticado' })
  @ApiResponse({
    status: 200,
    description: 'Informações do usuário autenticado',
    type: TokenDTO,
  })
  @ApiResponse({
    status: 401,
    description: 'Usuário não autenticado',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  @UseGuards(AuthGuard)
  public async me(@Usuario() usuario, @Res() res: Response) {
    try {
      return res.status(200).json({ usuario });
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }
}
