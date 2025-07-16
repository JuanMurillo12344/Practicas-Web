// src/modules/clientes/clientes.microservice.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateClienteDto, UpdateClienteDto } from './dto/create-cliente.dto';
import { ClientesService } from './cliente.service';

@Controller()
export class ClientesMicroserviceController {
  constructor(private readonly clientesService: ClientesService) {}

  @MessagePattern({ cmd: 'createCliente' })
  create(@Payload() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @MessagePattern({ cmd: 'findAllClientes' })
  findAll() {
    console.log('findAllClientes called');
    return this.clientesService.findAll();
  }

  @MessagePattern({ cmd: 'findOneCliente' })
  findOne(@Payload() id: number) {
    return this.clientesService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateCliente' })
  update(@Payload() updateData: { id: number; data: UpdateClienteDto }) {
    return this.clientesService.update(updateData.id, updateData.data);
  }

  @MessagePattern({ cmd: 'removeCliente' })
  remove(@Payload() id: number) {
    return this.clientesService.remove(id);
  }

}