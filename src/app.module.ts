import { Module } from '@nestjs/common';
import { HealthcheckModule } from './infra/modules/database/prisma/healthcheck/healthcheck.module';
import { UsuarioModule } from './app/modules/usuario/usuario.module';
import { GastoModule } from './app/modules/gasto/gasto.module';
import { AuthModule } from './app/modules/autenticacao/auth.module';

@Module({
  imports: [HealthcheckModule, AuthModule, UsuarioModule, GastoModule],
})
export class AppModule {}
