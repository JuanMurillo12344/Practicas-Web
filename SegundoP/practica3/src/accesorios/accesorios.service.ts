import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accesorio } from './entities/accesorio.entity';
import { CreateAccesorioDto } from './dto/create-accesorio.dto';
import { UpdateAccesorioDto } from './dto/update-accesorio.dto';

@Injectable()
export class AccesoriosService {
  constructor(
    @InjectRepository(Accesorio)
    private readonly accesorioRepo: Repository<Accesorio>,
  ) {}

  async create(dto: CreateAccesorioDto): Promise<Accesorio> {
    const accesorio = this.accesorioRepo.create(dto);
    return this.accesorioRepo.save(accesorio);
  }

  async findAll(): Promise<Accesorio[]> {
    return this.accesorioRepo.find();
  }

  async findOne(id: number): Promise<Accesorio> {
    const accesorio = await this.accesorioRepo.findOne({ where: { id } });
    if (!accesorio) {
      throw new NotFoundException(`Accesorio con id ${id} no encontrado`);
    }
    return accesorio;
  }

  async update(id: number, dto: UpdateAccesorioDto): Promise<Accesorio> {
    await this.accesorioRepo.update(id, dto);
    return this.findOne(id); // Esto ya lanza error si no existe
  }

  async remove(id: number): Promise<void> {
    const accesorio = await this.findOne(id); // Valida existencia antes de eliminar
    await this.accesorioRepo.remove(accesorio);
  }
}
