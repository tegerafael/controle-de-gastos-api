import { ErrorDto } from './dtos/error.dto';

export abstract class ErrorResBuilder<T> {
  constructor(protected readonly error: T | any) {}
  abstract buildResponse(): ErrorDto;
}
