import { Router } from 'express';
import { completarCompra, obtenerHistorialCompras } from './Compras.controller.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Router();

router.post('/completePurchase', validateJWT, completarCompra);
router.get('/HistorialCompras', validateJWT, obtenerHistorialCompras);

export default router;