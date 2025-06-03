import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRepository } from './repositories/usuario.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { EmailEUnicoConstraint } from 'src/commons/validators/email-e-unico.validator';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, EmailEUnicoConstraint, PrismaService],
})
export class UsuarioModule {}
