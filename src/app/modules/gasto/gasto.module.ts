import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { GastoController } from './controllers/gasto.controller';
import { GastoService } from './services/gasto.service';
import { GastoRepository } from './repositories/gasto.repository';
import { ListarInformacoesGastosBuilder } from './dtos/listar-informacoes-gastos.builder';
import { AuthService } from '../autenticacao/auth.service';
import { UsuarioService } from '../usuario/services/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioRepository } from '../usuario/repositories/usuario.repository';

@Module({
  controllers: [GastoController],
  providers: [
    GastoService,
    GastoRepository,
    AuthService,
    JwtService,
    UsuarioService,
    UsuarioRepository,
    ListarInformacoesGastosBuilder,
    PrismaService,
  ],
})
export class GastoModule {}
