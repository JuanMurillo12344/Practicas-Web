import { Router } from 'express';
import { TipoVehiculoController } from '../presentation/controllers/TipoVehiculoContrilloer';
import { TipoVehiculoService } from '../application/use_case/TipoVhiculoService';
import { TypeORMTipoVehiculoRepository } from '../data/typeorm/repositories/TypeORMTipoVehiculoRepository';

const repo = new TypeORMTipoVehiculoRepository();
const service = new TipoVehiculoService(repo);
const controller = new TipoVehiculoController(service);

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;