import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Multa } from './entities/multa.entity';
import { CreateMultaInput } from './dto/create-multa.input';
import { UpdateMultaInput } from './dto/update-multa.input';

@Injectable()
export class MultaService {
  constructor(
    @InjectRepository(Multa)
    private readonly repo: Repository<Multa>,
  ) {}

  create(input: CreateMultaInput) {
    const multa = this.repo.create(input);
    return this.repo.save(multa);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const multa = await this.repo.findOneBy({ id });
    if (!multa) throw new NotFoundException(`Multa ${id} no encontrada`);
    return multa;
  }

  async update(id: number, input: UpdateMultaInput) {
    await this.findOne(id);
    await this.repo.update(id, input);
    return this.repo.findOneBy({ id });
  }

  async remove(id: number) {
    const multa = await this.findOne(id);
    return this.repo.remove(multa);
  }
}