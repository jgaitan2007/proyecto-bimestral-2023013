import { Router } from "express";
import { addCategorias, getCategorias, updateCagorias, deleteCategorias } from "./categorias.controller.js";
import { addCategoriasValidator, updateCategoriasValidator, deleteCategoriasValidator } from "../middlewares/categorias-validators.js";

const router = Router();

/**
 * @swagger
 * /agregarCategorias:
 *   post:
 *     summary: Add a new category
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "New Category"
 *     responses:
 *       200:
 *         description: Category added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/agregarCategorias", addCategoriasValidator, addCategorias);

/**
 * @swagger
 * /listar:
 *   get:
 *     summary: Get all categories
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get("/listar", getCategorias);

/**
 * @swagger
 * /actualizarCategorias/{id}:
 *   put:
 *     summary: Update a category
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Category"
 *     responses:
 *       200:
 *         description: Category updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */
router.put("/actualizarCategorias/:id", updateCategoriasValidator, updateCagorias);

/**
 * @swagger
 * /eliminarCategorias/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category ID
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete("/eliminarCategorias/:id", deleteCategoriasValidator, deleteCategorias);

export default router;