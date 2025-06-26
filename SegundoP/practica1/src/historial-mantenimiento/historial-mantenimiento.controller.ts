import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistorialMantenimientoService } from './historial-mantenimiento.service';
import { CreateHistorialMantenimientoDto } from './dto/create-historial-mantenimiento.dto';
import { UpdateHistorialMantenimientoDto } from './dto/update-historial-mantenimiento.dto';

@Controller('historial-mantenimiento')
export class HistorialMantenimientoController {
  constructor(private readonly service: HistorialMantenimientoService) {}

  @Post()
  create(@Body() dto: CreateHistorialMantenimientoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateHistorialMantenimientoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
