import { CombustibleRepository } from '../../../domain/repositories/CombustibleRepository';
import { Combustible } from '../../../domain/models/Combustible';
import { CombustibleEntity } from '../entities/CombustibleEntity';
import { AppDataSource } from '../../../infrastructure/datasource/typeorm.config';

export class TypeORMCombustibleRepository implements CombustibleRepository {
  private repo = AppDataSource.getRepository(CombustibleEntity);

  async create(data: Combustible): Promise<Combustible> {
    return await this.repo.save(this.repo.create(data));
  }

  async findById(id: string): Promise<Combustible | null> {
    return await this.repo.findOneBy({ id });
  }

  async findAll(): Promise<Combustible[]> {
    return await this.repo.find();
  }

  async update(id: string, data: Partial<Combustible>): Promise<Combustible | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}