import { ErrorResBuilder } from './error-res.builder';
import { ErrorDto } from './dtos/error.dto';

export class AxiosErrorBuilder extends ErrorResBuilder<any> {
  buildResponse(): ErrorDto {
    const { response } = this.error;
    return {
      message: response ? response.data : this.error.message,
      status: response ? response.status : 500,
    };
  }
}
