import { AtualizarUsuarioReqDto } from '../dtos/request/atualizar-usuario-req.dto';
import { UsuarioReqDto } from '../dtos/request/usuario-req.dto';
import { UsuarioResDto } from '../dtos/response/usuario-res.dto';

export interface UsuarioControllerInterface {
  buscarTodos(): Promise<UsuarioResDto[]>;

  buscarUm(id: string): Promise<UsuarioResDto>;

  criar(usuario: UsuarioReqDto): Promise<UsuarioResDto>;

  atualizar(id: string, usuario: AtualizarUsuarioReqDto): Promise<UsuarioResDto>;

  deletar(id: string): Promise<void>;
}
