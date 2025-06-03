import { Module } from '@nestjs/common';
import { UsuarioModule } from './app/modules/usuario/usuario.module';
import { HealthcheckModule } from './infra/modules/database/prisma/healthcheck/healthcheck.module';

@Module({
  imports: [HealthcheckModule, UsuarioModule],
})
export class AppModule {}
