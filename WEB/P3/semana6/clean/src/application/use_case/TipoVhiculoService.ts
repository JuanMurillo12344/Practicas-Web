import { TipoVehiculoRepository } from '../../domain/repositories/TipoVehiculoRepository';
import { TipoVehiculo } from '../../domain/models/TipoVehiculo';

export class TipoVehiculoService {
  constructor(private repo: TipoVehiculoRepository) {}

  create(data: TipoVehiculo) {
    return this.repo.create(data);
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.findAll();
  }

  update(id: string, data: Partial<TipoVehiculo>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
