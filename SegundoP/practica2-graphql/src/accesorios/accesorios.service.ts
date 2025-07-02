import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accesorio } from './entities/accesorio.entity';
import { CreateAccesorioInput } from './dto/create-accesorio.input';
import { UpdateAccesorioInput } from './dto/update-accesorio.input';

@Injectable()
export class AccesorioService {
  constructor(
    @InjectRepository(Accesorio)
    private readonly repo: Repository<Accesorio>,
  ) {}

  create(input: CreateAccesorioInput) {
    const accesorio = this.repo.create(input);
    return this.repo.save(accesorio);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const accesorio = await this.repo.findOneBy({ id });
    if (!accesorio) throw new NotFoundException(`Accesorio ${id} no encontrado`);
    return accesorio;
  }

  async update(id: number, input: UpdateAccesorioInput) {
    await this.findOne(id);
    await this.repo.update(id, input);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    const accesorio = await this.findOne(id);
    return this.repo.remove(accesorio);
  }
}