import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRepository } from './repositories/usuario.repository';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { EmailEUnicoConstraint } from 'src/app/commons/validators/email-e-unico.validator';
import { UuidExiste } from 'src/app/commons/decorators/uuid-existe.decorator';
import { AuthService } from '../autenticacao/services/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    UsuarioRepository,
    AuthService,
    JwtService,
    EmailEUnicoConstraint,
    UuidExiste,
    PrismaService,
  ],
})
export class UsuarioModule {}
