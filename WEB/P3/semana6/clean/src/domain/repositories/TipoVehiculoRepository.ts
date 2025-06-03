import { TipoVehiculo } from '../models/TipoVehiculo';
export interface TipoVehiculoRepository {
  create(data: TipoVehiculo): Promise<TipoVehiculo>;
  findById(id: string): Promise<TipoVehiculo | null>;
  findAll(): Promise<TipoVehiculo[]>;
  update(id: string, data: Partial<TipoVehiculo>): Promise<TipoVehiculo | null>;
  delete(id: string): Promise<void>;
}
