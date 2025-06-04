import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/services/usuario.service';
import { UsuarioRepository } from '../usuario/repositories/usuario.repository';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsuarioService, UsuarioRepository, JwtService, PrismaService],
})
export class AuthModule {}
