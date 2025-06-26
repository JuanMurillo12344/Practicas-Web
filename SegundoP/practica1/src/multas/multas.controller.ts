import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MultasService } from './multas.service';
import { CreateMultaDto } from './dto/create-multa.dto';
import { UpdateMultaDto } from './dto/update-multa.dto';

@Controller('multas')
export class MultasController {
  constructor(private readonly service: MultasService) {}

  @Post()
  create(@Body() dto: CreateMultaDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateMultaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
