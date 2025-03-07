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

/**
 * @swagger
 * /productos/addProduct:
 *   post:
 *     summary: Add a new product
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 example: Descripción del producto
 *               precio:
 *                 type: number
 *                 example: 80
 *               categoria:
 *                 type: string
 *                 example: 67cb16a3f2c801f751f1388c
 *               stock:
 *                 type: number
 *                 example: 10
 *     responses:
 *       201:
 *         description: Product has been created
 *       500:
 *         description: Product creation failed
 */

/**
 * @swagger
 * /productos/listarProductos:
 *   get:
 *     summary: List all products
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: A list of products
 *       500:
 *         description: Product list fetch failed
 */

/**
 * @swagger
 * /productos/getProductById/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *       500:
 *         description: Product fetch failed
 */

/**
 * @swagger
 * /productos/updateProduct/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 example: Descripción del producto
 *               precio:
 *                 type: number
 *                 example: 8000
 *               categoria:
 *                 type: string
 *                 example: 67cb16a3f2c801f751f1388c
 *               stock:
 *                 type: number
 *                 example: 7
 *     responses:
 *       200:
 *         description: Product has been updated
 *       500:
 *         description: Product update failed
 */

/**
 * @swagger
 * /productos/deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product has been deleted
 *       500:
 *         description: Product deletion failed
 */

/**
 * @swagger
 * /productos/listarFueraDeStock:
 *   get:
 *     summary: List products out of stock
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Product list fetched successfully
 *       500:
 *         description: Product list fetch failed
 */

/**
 * @swagger
 * /productos/listarTopPoductos:
 *   get:
 *     summary: List top products
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Product list fetched successfully
 *       500:
 *         description: Product list fetch failed
 */

const router = Router();

router.post("/addProduct", addProductValidator, addProduct);

router.get("/listarProductos", listarProductos);

router.get("/getProductById/:id", getProductById);

router.put("/updateProduct/:id", updateProductValidator, updateProduct);

router.delete("/deleteProduct/:id", deleteProductValidator, deleteProduct);

router.get("/listarFueraDeStock", listarFueraDeStock);

router.get("/listarTopPoductos", listarTopPoductos);

export default router;