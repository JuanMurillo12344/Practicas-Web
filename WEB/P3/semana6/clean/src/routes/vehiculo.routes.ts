import { Router } from 'express';
import { VehiculoController } from '../presentation/controllers/VehiculoController';
import { VehiculoService } from '../application/use_case/VehiculoService';
import { TypeORMVehiculoRepository } from '../data/typeorm/repositories/TypeORMVehiculoRepository';

const repo = new TypeORMVehiculoRepository();
const service = new VehiculoService(repo);
const controller = new VehiculoController(service);

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
