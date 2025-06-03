import { SeguroRepository } from '../../../domain/repositories/SeguroRepository';
import { Seguro } from '../../../domain/models/Seguro';
import { SeguroModel } from '../models/SeguroModel';

export class MongooseSeguroRepository implements SeguroRepository {
  private toDomain(doc: any): Seguro {
    return {
      id: doc._id.toString(),
      nombre: doc.nombre,
      cobertura: doc.cobertura,
    };
  }

  async create(data: Seguro): Promise<Seguro> {
    const created = await SeguroModel.create(data);
    return this.toDomain(created);
  }

  async findById(id: string): Promise<Seguro | null> {
    const doc = await SeguroModel.findById(id).lean();
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<Seguro[]> {
    const docs = await SeguroModel.find().lean();
    return docs.map((doc) => this.toDomain(doc));
  }

  async update(id: string, data: Partial<Seguro>): Promise<Seguro | null> {
    const updated = await SeguroModel.findByIdAndUpdate(id, data, { new: true }).lean();
    return updated ? this.toDomain(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await SeguroModel.findByIdAndDelete(id);
  }
}
