// src/modules/administracion/empleados.microservice.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateEmpleadoDto,
  UpdateEmpleadoDto,
} from './dto/create-empleado.dto';
import { EmpleadosService } from './empleado.service';

@Controller()
export class EmpleadosMicroserviceController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @MessagePattern({ cmd: 'createEmpleado' })
  create(@Payload() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @MessagePattern({ cmd: 'findAllEmpleados' })
  findAll() {
    return this.empleadosService.findAll();
  }

  @MessagePattern({ cmd: 'findOneEmpleado' })
  findOne(@Payload() id: number) {
    return this.empleadosService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateEmpleado' })
  update(@Payload() updateData: { id: number; data: UpdateEmpleadoDto }) {
    return this.empleadosService.update(updateData.id, updateData.data);
  }

  @MessagePattern({ cmd: 'removeEmpleado' })
  remove(@Payload() id: number) {
    return this.empleadosService.remove(id);
  }
}
