import { MantenimientoRepository } from '../../../domain/repositories/MantenimientoRepository';
import { Mantenimiento } from '../../../domain/models/Mantenimiento';
import { MantenimientoEntity } from '../entities/MantenimientoEntity';
import { AppDataSource } from '../../../infrastructure/datasource/typeorm.config';

export class TypeORMMantenimientoRepository implements MantenimientoRepository {
  private repo = AppDataSource.getRepository(MantenimientoEntity);

  async create(data: Mantenimiento): Promise<Mantenimiento> {
    return await this.repo.save(this.repo.create(data));
  }

  async findById(id: string): Promise<Mantenimiento | null> {
    return await this.repo.findOneBy({ id });
  }

  async findAll(): Promise<Mantenimiento[]> {
    return await this.repo.find();
  }

  async update(id: string, data: Partial<Mantenimiento>): Promise<Mantenimiento | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
