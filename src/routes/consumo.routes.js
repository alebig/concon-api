import { Router } from 'express';
import { methods as consumoController } from '../controllers/consumo.controllers.js';

const router = Router();

router.get('/', consumoController.getConsumo);
router.post('/', consumoController.addConsumo);
router.put('/:id', consumoController.chgConsumo);
router.delete('/:id', consumoController.delConsumo);

export default router;