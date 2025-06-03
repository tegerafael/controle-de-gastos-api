import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/modules/database/prisma/prisma.service';
import { GastoController } from './controllers/gasto.controller';
import { GastoService } from './services/gasto.service';
import { GastoRepository } from './repositories/gasto.repository';

@Module({
  controllers: [GastoController],
  providers: [GastoService, GastoRepository, PrismaService],
})
export class GastoModule {}
