import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { HistorialMantenimientoResolver } from './historial-mantenimiento.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialMantenimiento])],
  providers: [HistorialMantenimientoService, HistorialMantenimientoResolver],
})
export class HistorialMantenimientoModule {}