import { HttpException } from '@nestjs/common';
import { AxiosErrorBuilder } from './axios-error.builder';
import { HttpExceptionErrorBuilder } from './http-exception-error.builder';
import { GenericErrorBuilder } from './generic-error.builder';

export class ErrorHandlerFactory {
  private static errorType = {
    AxiosError: AxiosErrorBuilder,
    HttpException: HttpExceptionErrorBuilder,
  };

  static throwError(error: any) {
    const BuilderClass = this.errorType[error.constructor.name];

    if (!BuilderClass) {
      throw new GenericErrorBuilder().buildResponse();
    }

    const errorRes = new BuilderClass(error).buildResponse();

    throw new HttpException(errorRes.message, errorRes.status);
  }
}
