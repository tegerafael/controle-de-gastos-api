import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorHandlerFactory } from 'src/app/commons/errors/error-handler.factory';

@Controller('autenticacao')
@ApiTags('Autenticação')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Autenticar usuario' })
  @ApiBody({
    type: AuthLoginDTO,
    description: 'Dados de autenticação do usuário',
    required: true,
  })
  async login(@Body() data: AuthLoginDTO) {
    try {
      return this.authService.login(data);
    } catch (error) {
      ErrorHandlerFactory.throwError(error);
    }
  }
}
