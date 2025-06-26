import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialMantenimiento } from './entities/historial-mantenimiento.entity';
import { CreateHistorialMantenimientoDto } from './dto/create-historial-mantenimiento.dto';
import { UpdateHistorialMantenimientoDto } from './dto/update-historial-mantenimiento.dto';

@Injectable()
export class HistorialMantenimientoService {
  constructor(
    @InjectRepository(HistorialMantenimiento)
    private readonly repo: Repository<HistorialMantenimiento>,
  ) {}

  create(dto: CreateHistorialMantenimientoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateHistorialMantenimientoDto) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}

