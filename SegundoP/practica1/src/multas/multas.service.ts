import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Multa } from './entities/multa.entity';
import { CreateMultaDto } from './dto/create-multa.dto';
import { UpdateMultaDto } from './dto/update-multa.dto';

@Injectable()
export class MultasService {
  constructor(
    @InjectRepository(Multa)
    private readonly repo: Repository<Multa>,
  ) {}

  create(dto: CreateMultaDto) {
    const nueva = this.repo.create(dto);
    return this.repo.save(nueva);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateMultaDto) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
