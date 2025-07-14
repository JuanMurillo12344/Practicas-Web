import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { CreateHistorialDto } from './dto/create-historial-mantenimiento.dto';
import { UpdateHistorialDto } from './dto/update-historial-mantenimiento.dto';

@Injectable()
export class HistorialMantenimientoService {
  constructor(
    @InjectRepository(HistorialMantenimiento)
    private readonly historialRepo: Repository<HistorialMantenimiento>,
  ) {}

  async create(dto: CreateHistorialDto): Promise<HistorialMantenimiento> {
    const nuevo = this.historialRepo.create(dto);
    return this.historialRepo.save(nuevo);
  }

  async findAll(): Promise<HistorialMantenimiento[]> {
    return this.historialRepo.find();
  }

  async findOne(id: number): Promise<HistorialMantenimiento> {
    const historial = await this.historialRepo.findOne({ where: { id } });
    if (!historial) {
      throw new NotFoundException(`Historial con id ${id} no encontrado`);
    }
    return historial;
  }

  async update(id: number, dto: UpdateHistorialDto): Promise<HistorialMantenimiento> {
    await this.historialRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const historial = await this.findOne(id);
    await this.historialRepo.remove(historial);
  }
}
