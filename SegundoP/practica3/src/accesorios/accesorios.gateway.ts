import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AccesoriosService } from './accesorios.service';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';

@WebSocketGateway({ cors: true })
export class AccesoriosGateway {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly accesoriosService: AccesoriosService) {}

  @SubscribeMessage('createAccesorio')
  async create(@MessageBody() dto: CreateAccesorioDto) {
    await this.accesoriosService.create(dto);
    this.wss.emit('accesorioCreado', await this.accesoriosService.findAll());
  }

  @SubscribeMessage('getAccesorios')
  async findAll() {
    return this.accesoriosService.findAll();
  }

  @SubscribeMessage('updateAccesorio')
  async update(@MessageBody() data: { id: number; dto: UpdateAccesorioDto }) {
    await this.accesoriosService.update(data.id, data.dto);
    this.wss.emit('accesorioActualizado', await this.accesoriosService.findAll());
  }

  @SubscribeMessage('deleteAccesorio')
  async remove(@MessageBody() id: number) {
    await this.accesoriosService.remove(id);
    this.wss.emit('accesorioEliminado', await this.accesoriosService.findAll());
  }
}
