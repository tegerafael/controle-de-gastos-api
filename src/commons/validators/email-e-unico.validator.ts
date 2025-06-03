import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/modules/usuario/services/usuario.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class EmailEUnicoConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validate(email: string): Promise<boolean> {
    const usuario = this.usuarioService.buscarPorEmail(email);
    return !usuario;
  }

  defaultMessage(): string {
    return 'O E-mail já está em uso';
  }
}

export function EmailEUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: EmailEUnicoConstraint,
    });
  };
}
