// src/modules/vehiculos/vehiculos.microservice.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateVehiculoDto, UpdateVehiculoDto } from './dto/create-vehiculo.dto';
import { VehiculosService } from './vehiculo.service';

@Controller()
export class VehiculosMicroserviceController {
  constructor(private readonly vehiculosService: VehiculosService) {}
  

  @MessagePattern({ cmd: 'createVehiculo' })
  create(@Payload() createVehiculoDto: CreateVehiculoDto) {
    return this.vehiculosService.create(createVehiculoDto);
  }

  @MessagePattern({ cmd: 'findAllVehiculos' })
  findAll() {
    return this.vehiculosService.findAll();
  }

  @MessagePattern({ cmd: 'findOneVehiculo' })
  findOne(@Payload() id: number) {
    return this.vehiculosService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateVehiculo' })
  update(@Payload() updateData: { id: number; data: UpdateVehiculoDto }) {
    return this.vehiculosService.update(updateData.id, updateData.data);
  }

  @MessagePattern({ cmd: 'removeVehiculo' })
  remove(@Payload() id: number) {
    return this.vehiculosService.remove(id);
  }

}