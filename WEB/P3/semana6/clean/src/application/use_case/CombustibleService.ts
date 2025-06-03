import { CombustibleRepository } from '../../domain/repositories/CombustibleRepository';
import { Combustible } from '../../domain/models/Combustible';

export class CombustibleService {
  constructor(private repo: CombustibleRepository) {}

  create(data: Combustible) {
    return this.repo.create(data);
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.findAll();
  }

  update(id: string, data: Partial<Combustible>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
