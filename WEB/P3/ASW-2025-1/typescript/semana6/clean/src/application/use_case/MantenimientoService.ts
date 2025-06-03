import { MantenimientoRepository } from '../../domain/repositories/MantenimientoRepository';
import { Mantenimiento } from '../../domain/models/Mantenimiento';

export class MantenimientoService {
  constructor(private repo: MantenimientoRepository) {}

  create(data: Mantenimiento) {
    return this.repo.create(data);
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.findAll();
  }

  update(id: string, data: Partial<Mantenimiento>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
