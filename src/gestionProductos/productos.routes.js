import { Router } from "express";
import {
    addProduct,
    listarProductos,
    updateProduct,
    deleteProduct,
    getProductById,
    listarFueraDeStock,
    listarTopPoductos
} from "./productos.controller.js";
import {
    addProductValidator,
    updateProductValidator,
    deleteProductValidator
} from "../middlewares/productos-validator.js";

const router = Router();

/**
 * @swagger
 * /addProduct:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/addProduct", addProductValidator, addProduct);

/**
 * @swagger
 * /listarProductos:
 *   get:
 *     summary: List all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/listarProductos", listarProductos);

/**
 * @swagger
 * /getProductById/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get("/getProductById/:id", getProductById);

/**
 * @swagger
 * /updateProduct/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Product not found
 */
router.put("/updateProduct/:id", updateProductValidator, updateProduct);

/**
 * @swagger
 * /deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete("/deleteProduct/:id", deleteProductValidator, deleteProduct);

/**
 * @swagger
 * /listarFueraDeStock:
 *   get:
 *     summary: List products out of stock
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products out of stock
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/listarFueraDeStock", listarFueraDeStock);

/**
 * @swagger
 * /listarTopPoductos:
 *   get:
 *     summary: List top products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of top products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/listarTopPoductos", listarTopPoductos);

export default router;