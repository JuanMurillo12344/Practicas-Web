import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accesorio } from './entities/accesorio.entity';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';

@Injectable()
export class AccesoriosService {
  constructor(
    @InjectRepository(Accesorio)
    private accesorioRepository: Repository<Accesorio>,
  ) {}

  create(dto: CreateAccesorioDto) {
    const nuevo = this.accesorioRepository.create(dto);
    return this.accesorioRepository.save(nuevo);
  }

  findAll() {
    return this.accesorioRepository.find();
  }

  findOne(id: number) {
    return this.accesorioRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateAccesorioDto) {
    await this.accesorioRepository.update(id, dto);
    return this.accesorioRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.accesorioRepository.delete(id);
  }
}
