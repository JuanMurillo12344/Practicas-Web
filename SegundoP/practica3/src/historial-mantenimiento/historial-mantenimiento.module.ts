import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { HistorialMantenimientoGateway } from './historial-mantenimiento.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialMantenimiento])],
  providers: [HistorialMantenimientoService, HistorialMantenimientoGateway],
})
export class HistorialMantenimientoModule {}
