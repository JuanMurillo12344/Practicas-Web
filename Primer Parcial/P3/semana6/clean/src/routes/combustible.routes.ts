import { Router } from 'express';
import { CombustibleController } from '../presentation/controllers/CombustibleController';
import { CombustibleService } from '../application/use_case/CombustibleService';
import { TypeORMCombustibleRepository } from '../data/typeorm/repositories/TypeORMCombustibleRepository';

const repo = new TypeORMCombustibleRepository();
const service = new CombustibleService(repo);
const controller = new CombustibleController(service);

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;