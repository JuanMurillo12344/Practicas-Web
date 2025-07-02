import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { CreateHistorialMantenimientoInput } from './dto/create-historial-mantenimiento.input';
import { UpdateHistorialMantenimientoInput } from './dto/update-historial-mantenimiento.input';

@Injectable()
export class HistorialMantenimientoService {
  constructor(
    @InjectRepository(HistorialMantenimiento)
    private readonly repo: Repository<HistorialMantenimiento>,
  ) {}

  create(input: CreateHistorialMantenimientoInput) {
    const entity = this.repo.create(input);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const entity = await this.repo.findOneBy({ id });
    if (!entity) throw new NotFoundException(`HistorialMantenimiento ${id} no encontrado`);
    return entity;
  }

  async update(id: number, input: UpdateHistorialMantenimientoInput) {
    await this.findOne(id);
    await this.repo.update(id, input);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repo.remove(entity);
  }
}