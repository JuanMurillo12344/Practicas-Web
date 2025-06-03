import { SeguroRepository } from '../../domain/repositories/SeguroRepository';
import { Seguro } from '../../domain/models/Seguro';

export class SeguroService {
  constructor(private repo: SeguroRepository) {}

  create(data: Seguro) {
    return this.repo.create(data);
  }

  getById(id: string) {
    return this.repo.findById(id);
  }

  getAll() {
    return this.repo.findAll();
  }

  update(id: string, data: Partial<Seguro>) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
