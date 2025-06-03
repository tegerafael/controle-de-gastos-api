import { Injectable } from '@nestjs/common';
import { UsuarioRepositoryInterface } from './usuario.repository.interface';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { UsuarioResDto } from '../dtos/response/usuario-res.dto';
import { UsuarioReqDto } from '../dtos/request/usuario-req.dto';
import { AtualizarUsuarioReqDto } from '../dtos/request/atualizar-usuario-req.dto';

@Injectable()
export class UsuarioRepository implements UsuarioRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  public async buscarTodos(): Promise<UsuarioResDto[]> {
    return this.prismaService.usuario.findMany();
  }

  public async buscarUm(id: string): Promise<UsuarioResDto> {
    return this.prismaService.usuario.findFirst({
      where: { id },
    });
  }

  public async criar(data: UsuarioReqDto): Promise<UsuarioResDto> {
    return this.prismaService.usuario.create({
      data,
    });
  }

  public async atualizar(id: string, data: AtualizarUsuarioReqDto): Promise<UsuarioResDto> {
    return this.prismaService.usuario.update({
      where: { id },
      data,
    });
  }

  public async deletar(id: string): Promise<void> {
    await this.prismaService.usuario.delete({
      where: { id },
    });
  }

  public async buscarPorEmail(email: string): Promise<boolean> {
    const usuario = await this.prismaService.usuario.findFirst({
      where: { email },
    });

    return !!usuario;
  }
}
