import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/services/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: AuthLoginDTO) {
    const usuario = await this.usuarioService.buscarPorEmail(data.email);
    if (!usuario || !(await bcrypt.compare(data.senha, usuario.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };

    const token = sign(payload, process.env.JWT_SECRET, {
      expiresIn: '12h',
    });

    return { token };
  }

  verificarToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });

      if (data.iss) {
        throw new UnauthorizedException('Token inválido');
      }

      return data;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
