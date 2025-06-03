import { Router } from 'express';
import { SeguroController } from '../presentation/controllers/SeguroController';
import { SeguroService } from '../application/use_case/SeguroService';
import { TypeORMSeguroRepository } from '../data/typeorm/repositories/TypeORMSeguroRepository';

const repo = new TypeORMSeguroRepository();
const service = new SeguroService(repo);
const controller = new SeguroController(service);

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
