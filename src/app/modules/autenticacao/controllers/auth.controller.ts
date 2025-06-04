import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthLoginDTO } from '../dto/request/auth-login.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';
import { TokenDTO } from '../dto/response/token.dto';
import { AuthControllerInterface } from './auth.controller.interface';

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
}
