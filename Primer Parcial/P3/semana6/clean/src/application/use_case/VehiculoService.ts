import { VehiculoRepository } from '../../domain/repositories/VehiculoRepository';
import { Vehiculo } from '../../domain/models/Vehiculo';

export class VehiculoService {
  constructor(private repo: VehiculoRepository) {}

  create(data: Vehiculo) {
    return this.repo.create(data);
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.findAll();
  }

  update(id: string, data: Partial<Vehiculo>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}