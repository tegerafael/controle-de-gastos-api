import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/app/modules/usuario/services/usuario.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class UuidExiste implements ValidatorConstraintInterface {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validate(ids: string | string[], { property }: ValidationArguments): Promise<boolean> {
    const idsArray = Array.isArray(ids) ? ids : [ids];

    const services = {
      id_usu_fk: this.usuarioService,
    };

    const repo = services[property];
    if (!repo) return false;

    const results = await Promise.all(idsArray.map((id) => repo.existe(id)));
    const booleanResults = results.map((result) => !!result);

    return booleanResults.includes(true);
  }
}

export function EUuidExiste(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: {
        message: 'O id fornecido não existe',
        ...validationOptions,
      },
      constraints: [],
      validator: UuidExiste,
    });
  };
}
