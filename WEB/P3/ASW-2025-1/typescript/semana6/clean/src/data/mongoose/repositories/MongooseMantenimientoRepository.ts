import { MantenimientoRepository } from '../../../domain/repositories/MantenimientoRepository';
import { Mantenimiento } from '../../../domain/models/Mantenimiento';
import { MantenimientoModel } from '../models/Mantenimiento';

export class MongooseMantenimientoRepository implements MantenimientoRepository {
  private toDomain(doc: any): Mantenimiento {
    return {
      id: doc._id.toString(),
      descripcion: doc.descripcion,
      fecha: doc.fecha,
      vehiculoId: doc.vehiculoId,
    };
  }

  async create(data: Mantenimiento): Promise<Mantenimiento> {
    const created = await MantenimientoModel.create(data);
    return this.toDomain(created);
  }

  async findById(id: string): Promise<Mantenimiento | null> {
    const doc = await MantenimientoModel.findById(id).lean();
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<Mantenimiento[]> {
    const docs = await MantenimientoModel.find().lean();
    return docs.map((doc) => this.toDomain(doc));
  }

  async update(id: string, data: Partial<Mantenimiento>): Promise<Mantenimiento | null> {
    const updated = await MantenimientoModel.findByIdAndUpdate(id, data, { new: true }).lean();
    return updated ? this.toDomain(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await MantenimientoModel.findByIdAndDelete(id);
  }
}
