import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { CreateHistorialDto } from './dto/create-historial-mantenimiento.dto';
import { UpdateHistorialDto } from './dto/update-historial-mantenimiento.dto';

@WebSocketGateway({ cors: true })
export class HistorialMantenimientoGateway {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly service: HistorialMantenimientoService) {}

  @SubscribeMessage('createHistorial')
  async create(@MessageBody() dto: CreateHistorialDto) {
    await this.service.create(dto);
    this.wss.emit('historialCreado', await this.service.findAll());
  }

  @SubscribeMessage('getHistoriales')
  async findAll() {
    return this.service.findAll();
  }

  @SubscribeMessage('updateHistorial')
  async update(@MessageBody() data: { id: number; dto: UpdateHistorialDto }) {
    await this.service.update(data.id, data.dto);
    this.wss.emit('historialActualizado', await this.service.findAll());
  }

  @SubscribeMessage('deleteHistorial')
  async remove(@MessageBody() id: number) {
    await this.service.remove(id);
    this.wss.emit('historialEliminado', await this.service.findAll());
  }
}
