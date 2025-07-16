import { Module } from '@nestjs/common';
import { VehiculosService } from './vehiculo.service';
import { VehiculosMicroserviceController } from './vehiculo.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Vehiculo]) ],
  exports: [ TypeOrmModule ],
  controllers: [VehiculosMicroserviceController],
  providers: [VehiculosService],
})
export class VehiculoModule {}
