import { TipoVehiculoRepository } from '../../../domain/repositories/TipoVehiculoRepository';
import { TipoVehiculo } from '../../../domain/models/TipoVehiculo';
import { TipoVehiculoModel } from '../models/TipoVehiculo';

export class MongooseTipoVehiculoRepository implements TipoVehiculoRepository {
  private toDomain(doc: any): TipoVehiculo {
    return {
      id: doc._id.toString(),
      nombre: doc.nombre,
      descripcion: doc.descripcion,
    };
  }

  async create(data: TipoVehiculo): Promise<TipoVehiculo> {
    const created = await TipoVehiculoModel.create(data);
    return this.toDomain(created);
  }

  async findById(id: string): Promise<TipoVehiculo | null> {
    const doc = await TipoVehiculoModel.findById(id).lean();
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<TipoVehiculo[]> {
    const docs = await TipoVehiculoModel.find().lean();
    return docs.map((doc) => this.toDomain(doc));
  }

  async update(id: string, data: Partial<TipoVehiculo>): Promise<TipoVehiculo | null> {
    const updated = await TipoVehiculoModel.findByIdAndUpdate(id, data, { new: true }).lean();
    return updated ? this.toDomain(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await TipoVehiculoModel.findByIdAndDelete(id);
  }
}
