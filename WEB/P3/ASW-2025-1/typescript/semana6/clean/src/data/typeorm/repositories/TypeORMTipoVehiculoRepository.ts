import { TipoVehiculoRepository } from '../../../domain/repositories/TipoVehiculoRepository';
import { TipoVehiculo } from '../../../domain/models/TipoVehiculo';
import { TipoVehiculoEntity } from '../entities/TipoVehiculoEntity';
import { AppDataSource } from '../../../infrastructure/datasource/typeorm.config';

export class TypeORMTipoVehiculoRepository implements TipoVehiculoRepository {
  private repo = AppDataSource.getRepository(TipoVehiculoEntity);

  async create(data: TipoVehiculo): Promise<TipoVehiculo> {
    return await this.repo.save(this.repo.create(data));
  }

  async findById(id: string): Promise<TipoVehiculo | null> {
    return await this.repo.findOneBy({ id });
  }

  async findAll(): Promise<TipoVehiculo[]> {
    return await this.repo.find();
  }

  async update(id: string, data: Partial<TipoVehiculo>): Promise<TipoVehiculo | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
