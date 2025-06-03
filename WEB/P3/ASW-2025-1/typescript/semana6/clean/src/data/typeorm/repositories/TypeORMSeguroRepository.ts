import { SeguroRepository } from '../../../domain/repositories/SeguroRepository';
import { Seguro } from '../../../domain/models/Seguro';
import { SeguroEntity } from '../entities/SeguroEntity';
import { AppDataSource } from '../../../infrastructure/datasource/typeorm.config';

export class TypeORMSeguroRepository implements SeguroRepository {
  private repo = AppDataSource.getRepository(SeguroEntity);

  async create(data: Seguro): Promise<Seguro> {
    return await this.repo.save(this.repo.create(data));
  }

  async findById(id: string): Promise<Seguro | null> {
    return await this.repo.findOneBy({ id });
  }

  async findAll(): Promise<Seguro[]> {
    return await this.repo.find();
  }

  async update(id: string, data: Partial<Seguro>): Promise<Seguro | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}