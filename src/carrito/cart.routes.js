import { Router } from "express";
import { agregarCarrito } from "./cart.controller.js";
import { agregarcarritoValidator } from "../middlewares/cart-validators.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = Router();

/**
 * @swagger
 * /carrito/agregarAlCarrito:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Carrito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: string
 *                 example: 67cb208575e99f52ea35e112
 *               cantidad:
 *                 type: number
 *                 example: 50
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 *       500:
 *         description: Error al agregar producto al carrito
 */
router.post("/agregarAlCarrito", validateJWT, agregarcarritoValidator, agregarCarrito);

export default router;