import { Router } from 'express';
import { editarFactura, obtenerFacturasUsuario, obtenerProductosFactura } from './facturas.controller.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Router();

/**
 * @swagger
 * /facturas/editInvoice/{id}:
 *   put:
 *     summary: Editar una factura
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la factura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     producto:
 *                       type: string
 *                     cantidad:
 *                       type: number
 *     responses:
 *       200:
 *         description: Factura actualizada
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error al editar la factura
 */
router.put('/editInvoice/:id', validateJWT, editarFactura);

/**
 * @swagger
 * /facturas/userInvoices:
 *   get:
 *     summary: Obtener facturas de un usuario
 *     tags: [Facturas]
 *     responses:
 *       200:
 *         description: Lista de facturas del usuario
 *       404:
 *         description: No se encontraron facturas para este usuario
 *       500:
 *         description: Error al obtener las facturas del usuario
 */
router.get('/userInvoices', validateJWT, obtenerFacturasUsuario);

/**
 * @swagger
 * /facturas/invoiceProducts/{id}:
 *   get:
 *     summary: Obtener productos de una factura
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la factura
 *     responses:
 *       200:
 *         description: Lista de productos de la factura
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error al obtener los productos de la factura
 */
router.get('/invoiceProducts/:id', validateJWT, obtenerProductosFactura);

export default router;