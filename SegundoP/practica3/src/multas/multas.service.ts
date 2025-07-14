import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Multa } from './entities/multa.entity';
import { CreateMultaDto } from './dto/create-multa.dto';
import { UpdateMultaDto } from './dto/update-multa.dto';

@Injectable()
export class MultasService {
  constructor(
    @InjectRepository(Multa)
    private readonly multaRepo: Repository<Multa>,
  ) {}

  async create(dto: CreateMultaDto): Promise<Multa> {
    const multa = this.multaRepo.create(dto);
    return this.multaRepo.save(multa);
  }

  async findAll(): Promise<Multa[]> {
    return this.multaRepo.find();
  }

  async findOne(id: number): Promise<Multa> {
    const multa = await this.multaRepo.findOne({ where: { id } });
    if (!multa) {
      throw new NotFoundException(`Multa con id ${id} no encontrada`);
    }
    return multa;
  }

  async update(id: number, dto: UpdateMultaDto): Promise<Multa> {
    await this.multaRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const multa = await this.findOne(id);
    await this.multaRepo.remove(multa);
  }
}
