import { Combustible } from '../models/Combustible';
export interface CombustibleRepository {
  create(data: Combustible): Promise<Combustible>;
  findById(id: string): Promise<Combustible | null>;
  findAll(): Promise<Combustible[]>;
  update(id: string, data: Partial<Combustible>): Promise<Combustible | null>;
  delete(id: string): Promise<void>;
}