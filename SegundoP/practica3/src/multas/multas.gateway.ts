import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MultasService } from './multas.service';
import { CreateMultaDto } from './dto/create-multa.dto';
import { UpdateMultaDto } from './dto/update-multa.dto';

@WebSocketGateway({ cors: true })
export class MultasGateway {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly service: MultasService) {}

  @SubscribeMessage('createMulta')
  async create(@MessageBody() dto: CreateMultaDto) {
    await this.service.create(dto);
    this.wss.emit('multaCreada', await this.service.findAll());
  }

  @SubscribeMessage('getMultas')
  async findAll() {
    return this.service.findAll();
  }

  @SubscribeMessage('updateMulta')
  async update(@MessageBody() data: { id: number; dto: UpdateMultaDto }) {
    await this.service.update(data.id, data.dto);
    this.wss.emit('multaActualizada', await this.service.findAll());
  }

  @SubscribeMessage('deleteMulta')
  async remove(@MessageBody() id: number) {
    await this.service.remove(id);
    this.wss.emit('multaEliminada', await this.service.findAll());
  }
}
