import { Router } from 'express';
import { MantenimientoController } from '../presentation/controllers/MantenimientoController';
import { MantenimientoService } from '../application/use_case/MantenimientoService';
import { TypeORMMantenimientoRepository } from '../data/typeorm/repositories/TypeORMMantenimientoRepository';

const repo = new TypeORMMantenimientoRepository();
const service = new MantenimientoService(repo);
const controller = new MantenimientoController(service);

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
