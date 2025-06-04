import { AuthLoginDTO } from '../dto/request/auth-login.dto';
import { TokenDTO } from '../dto/response/token.dto';

export interface AuthControllerInterface {
  login(data: AuthLoginDTO): Promise<TokenDTO>;
}
