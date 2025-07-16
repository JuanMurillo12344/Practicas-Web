// src/modules/vehiculos/vehiculos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { CreateVehiculoDto, UpdateVehiculoDto } from './dto/create-vehiculo.dto';

@Injectable()
export class VehiculosService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return await this.vehiculoRepository.save(vehiculo);
  }

  async findAll(): Promise<Vehiculo[]> {
    return await this.vehiculoRepository.find({
      relations: ['tipo', 'mantenimientos', 'seguros', 'combustibles'],
    });
  }

  async findOne(id: number): Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepository.findOne({
      where: { id_vehiculo: id },
      relations: ['tipo', 'mantenimientos', 'seguros', 'combustibles'],
    });
    if (!vehiculo) {
      throw new Error('Vehículo no encontrado');
    }
    return vehiculo;
  }

  async update(id: number, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = await this.findOne(id);
    this.vehiculoRepository.merge(vehiculo, updateVehiculoDto);
    return await this.vehiculoRepository.save(vehiculo);
  }

  async remove(id: number): Promise<void> {
    const vehiculo = await this.findOne(id);
    await this.vehiculoRepository.remove(vehiculo);
  }

  async findByTipo(tipoId: number): Promise<Vehiculo[]> {
    return await this.vehiculoRepository.find({
      where: { tipo_id: tipoId  },
      relations: ['tipo'],
    });
  }

  async findDisponibles(fechaInicio: Date, fechaFin: Date): Promise<Vehiculo[]> {
    // Implementar lógica de disponibilidad
    return await this.vehiculoRepository
      .createQueryBuilder('vehiculo')
      .leftJoinAndSelect(
        'vehiculo.reservas',
        'reserva',
        'reserva.fecha_inicio <= :fechaFin AND reserva.fecha_fin >= :fechaInicio',
        { fechaInicio, fechaFin },
      )
      .where('reserva.id_reserva IS NULL')
      .getMany();
  }
}