import { Seguro } from '../models/Seguro';
export interface SeguroRepository {
  create(data: Seguro): Promise<Seguro>;
  findById(id: string): Promise<Seguro | null>;
  findAll(): Promise<Seguro[]>;
  update(id: string, data: Partial<Seguro>): Promise<Seguro | null>;
  delete(id: string): Promise<void>;
}
