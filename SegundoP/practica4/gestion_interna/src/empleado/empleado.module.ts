import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleado.service';
import { EmpleadosMicroserviceController } from './empleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Empleado])],
  exports: [TypeOrmModule],
  controllers: [EmpleadosMicroserviceController],
  providers: [EmpleadosService],
})
export class EmpleadoModule {}
