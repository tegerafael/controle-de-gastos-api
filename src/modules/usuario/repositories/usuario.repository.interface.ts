import { AtualizarUsuarioReqDto } from '../dtos/request/atualizar-usuario-req.dto';
import { UsuarioReqDto } from '../dtos/request/usuario-req.dto';
import { UsuarioResDto } from '../dtos/response/usuario-res.dto';

export interface UsuarioRepositoryInterface {
  buscarTodos(): Promise<UsuarioResDto[]>;

  buscarUm(id: string): Promise<UsuarioResDto>;

  criar(data: UsuarioReqDto): Promise<UsuarioResDto>;

  atualizar(id: string, data: AtualizarUsuarioReqDto): Promise<UsuarioResDto>;

  deletar(id: string): Promise<void>;

  buscarPorEmail(email: string): Promise<boolean>;
}
