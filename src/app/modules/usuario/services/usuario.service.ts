import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioServiceInterface } from './usuario.service.interface';
import { UsuarioResDto } from '../dtos/response/usuario-res.dto';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { UsuarioReqDto } from '../dtos/request/usuario-req.dto';
import { AtualizarUsuarioReqDto } from '../dtos/request/atualizar-usuario-req.dto';

@Injectable()
export class UsuarioService implements UsuarioServiceInterface {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async buscarTodos(): Promise<UsuarioResDto[]> {
    return this.usuarioRepository.buscarTodos();
  }

  public async buscarPorId(id: string): Promise<UsuarioResDto> {
    return this.existe(id);
  }

  public async criar(usuario: UsuarioReqDto): Promise<UsuarioResDto> {
    const saltRounds = 10;
    usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);

    return this.usuarioRepository.criar(usuario);
  }

  public async atualizar(id: string, usuario: AtualizarUsuarioReqDto): Promise<UsuarioResDto> {
    await this.existe(id);

    const saltRounds = 10;
    if (usuario.senha) {
      usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
    }

    return this.usuarioRepository.atualizar(id, usuario);
  }

  public async deletar(id: string): Promise<void> {
    await this.existe(id);

    await this.usuarioRepository.deletar(id);
  }

  public async buscarPorEmail(email: string): Promise<UsuarioResDto> {
    return this.usuarioRepository.buscarPorEmail(email);
  }

  public async existe(id: string): Promise<UsuarioResDto> {
    const usuario = await this.usuarioRepository.buscarPorId(id);

    if (!usuario) {
      throw new NotFoundException(`Usuário não encontrado`);
    }

    return usuario;
  }
}
