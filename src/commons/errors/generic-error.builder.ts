import { ErrorDto } from './dtos/error.dto';

export class GenericErrorBuilder {
  buildResponse(): ErrorDto {
    return {
      message: 'Internal server error, error type not yet implemented.',
      status: 500,
    };
  }
}
