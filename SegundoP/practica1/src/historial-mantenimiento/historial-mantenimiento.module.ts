import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { HistorialMantenimientoController } from './historial-mantenimiento.controller';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialMantenimiento])],
  controllers: [HistorialMantenimientoController],
  providers: [HistorialMantenimientoService],
})
export class HistorialMantenimientoModule {}
