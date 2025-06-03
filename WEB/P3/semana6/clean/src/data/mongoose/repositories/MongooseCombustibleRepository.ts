import { CombustibleRepository } from '../../../domain/repositories/CombustibleRepository';
import { Combustible } from '../../../domain/models/Combustible';
import { CombustibleModel } from '../models/Combustile';

export class MongooseCombustibleRepository implements CombustibleRepository {
  private toDomain(doc: any): Combustible {
    return {
      id: doc._id.toString(),
      tipo: doc.tipo,
      cantidad: doc.cantidad,
      vehiculoId: doc.vehiculoId,
    };
  }

  async create(data: Combustible): Promise<Combustible> {
    const created = await CombustibleModel.create(data);
    return this.toDomain(created);
  }

  async findById(id: string): Promise<Combustible | null> {
    const doc = await CombustibleModel.findById(id).lean();
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<Combustible[]> {
    const docs = await CombustibleModel.find().lean();
    return docs.map((doc) => this.toDomain(doc));
  }

  async update(id: string, data: Partial<Combustible>): Promise<Combustible | null> {
    const updated = await CombustibleModel.findByIdAndUpdate(id, data, { new: true }).lean();
    return updated ? this.toDomain(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await CombustibleModel.findByIdAndDelete(id);
  }
}
