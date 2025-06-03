import { VehiculoRepository } from '../../../domain/repositories/VehiculoRepository';
import { Vehiculo } from '../../../domain/models/Vehiculo';
import { VehiculoEntity } from '../entities/VehiculoEntity';
import { AppDataSource } from '../../../infrastructure/datasource/typeorm.config';

export class TypeORMVehiculoRepository implements VehiculoRepository {
  private repo = AppDataSource.getRepository(VehiculoEntity);

  async create(data: Vehiculo): Promise<Vehiculo> {
    return await this.repo.save(this.repo.create(data));
  }

  async findById(id: string): Promise<Vehiculo | null> {
    return await this.repo.findOneBy({ id });
  }

  async findAll(): Promise<Vehiculo[]> {
    return await this.repo.find();
  }

  async update(id: string, data: Partial<Vehiculo>): Promise<Vehiculo | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
