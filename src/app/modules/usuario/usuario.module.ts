import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRepository } from './repositories/usuario.repository';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { EmailEUnicoConstraint } from 'src/app/commons/validators/email-e-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, EmailEUnicoConstraint, PrismaService],
})
export class UsuarioModule {}
