import { ErrorResBuilder } from './error-res.builder';
import { ErrorDto } from './dtos/error.dto';

export class HttpExceptionErrorBuilder extends ErrorResBuilder<any> {
  buildResponse(): ErrorDto {
    return {
      message: this.error.message,
      status: this.error.getStatus(),
    };
  }
}
