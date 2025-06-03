import { Vehiculo } from '../models/Vehiculo';
export interface VehiculoRepository {
  create(data: Vehiculo): Promise<Vehiculo>;
  findById(id: string): Promise<Vehiculo | null>;
  findAll(): Promise<Vehiculo[]>;
  update(id: string, data: Partial<Vehiculo>): Promise<Vehiculo | null>;
  delete(id: string): Promise<void>;
}