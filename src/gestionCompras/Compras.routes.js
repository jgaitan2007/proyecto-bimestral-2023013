import { Router } from 'express';
import { completarCompra, obtenerHistorialCompras } from './Compras.controller.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Router();

/**
 * @swagger
 * /purchase/completePurchase:
 *   post:
 *     summary: Complete a purchase
 *     tags: [Compras]
 *     responses:
 *       200:
 *         description: Compra completada
 *       500:
 *         description: Error al completar la compra
 */

/**
 * @swagger
 * /purchase/HistorialCompras:
 *   get:
 *     summary: Get purchase history
 *     tags: [Compras]
 *     responses:
 *       200:
 *         description: Purchase history fetched successfully
 *       500:
 *         description: Error al obtener el historial de compras
 */

router.post('/completePurchase', validateJWT, completarCompra);
router.get('/HistorialCompras', validateJWT, obtenerHistorialCompras);

export default router;