import { Mantenimiento } from '../models/Mantenimiento';
export interface MantenimientoRepository {
  create(data: Mantenimiento): Promise<Mantenimiento>;
  findById(id: string): Promise<Mantenimiento | null>;
  findAll(): Promise<Mantenimiento[]>;
  update(id: string, data: Partial<Mantenimiento>): Promise<Mantenimiento | null>;
  delete(id: string): Promise<void>;
}