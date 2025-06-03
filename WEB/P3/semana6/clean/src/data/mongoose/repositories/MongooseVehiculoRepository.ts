import { VehiculoRepository } from '../../../domain/repositories/VehiculoRepository';
import { Vehiculo } from '../../../domain/models/Vehiculo';
import { VehiculoModel } from '../models/VehiculoModel';

export class MongooseVehiculoRepository implements VehiculoRepository {
  private toDomain(doc: any): Vehiculo {
    return {
      id: doc._id.toString(),
      marca: doc.marca,
      modelo: doc.modelo,
      anio: doc.anio,
      tipoVehiculoId: doc.tipoVehiculoId,
      seguroId: doc.seguroId,
    };
  }

  async create(data: Vehiculo): Promise<Vehiculo> {
    const created = await VehiculoModel.create(data);
    return this.toDomain(created);
  }

  async findById(id: string): Promise<Vehiculo | null> {
    const doc = await VehiculoModel.findById(id).lean();
    return doc ? this.toDomain(doc) : null;
  }

  async findAll(): Promise<Vehiculo[]> {
    const docs = await VehiculoModel.find().lean();
    return docs.map((doc) => this.toDomain(doc));
  }

  async update(id: string, data: Partial<Vehiculo>): Promise<Vehiculo | null> {
    const updated = await VehiculoModel.findByIdAndUpdate(id, data, { new: true }).lean();
    return updated ? this.toDomain(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await VehiculoModel.findByIdAndDelete(id);
  }
}
