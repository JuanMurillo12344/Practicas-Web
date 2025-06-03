import { Request, Response } from 'express';
import { CombustibleService } from '../../application/use_case/CombustibleService';

export class CombustibleController {
  constructor(private service: CombustibleService) {}

  create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.body);
    res.status(201).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.service.getById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Not found' });
    res.json(result);
  };

  getAll = async (_: Request, res: Response) => {
    const result = await this.service.getAll();
    res.json(result);
  };

  update = async (req: Request, res: Response) => {
    const result = await this.service.update(req.params.id, req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);
    res.status(204).send();
  };
}