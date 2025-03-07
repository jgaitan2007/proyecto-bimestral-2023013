import { Router } from "express";
import { addCategorias, getCategorias, updateCagorias, deleteCategorias } from "./categorias.controller.js";
import { addCategoriasValidator, updateCategoriasValidator, deleteCategoriasValidator } from "../middlewares/categorias-validators.js";

const router = Router();

/**
 * @swagger
 * /gestionCategorias/agregarCategorias:
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
 *               nombre:
 *                 type: string
 *                 example: Electrónica
 *               descripcion:
 *                 type: string
 *                 example: Productos electrónicos
 *     responses:
 *       201:
 *         description: Category has been created
 *       500:
 *         description: Error al agregar la categoria
 */

router.post("/agregarCategorias", addCategoriasValidator, addCategorias);

/**
 * @swagger
 * /gestionCategorias/listar:
 *   get:
 *     summary: List all categories
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: A list of categories
 *       500:
 *         description: Error al obtener las categorias
 */

router.get("/listar", getCategorias);

/**
 * @swagger
 * /gestionCategorias/actualizarCategorias/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categorias]
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
 *               nombre:
 *                 type: string
 *                 example: Electrónica y Gadgets
 *               descripcion:
 *                 type: string
 *                 example: Productos electrónicos y gadgets
 *     responses:
 *       200:
 *         description: Category has been updated
 *       500:
 *         description: Error al actualizar la categoria
 */

router.put("/actualizarCategorias/:id", updateCategoriasValidator, updateCagorias);

/**
 * @swagger
 * /gestionCategorias/eliminarCategorias/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category has been deleted
 *       500:
 *         description: Error al eliminar la categoria
 */

router.delete("/eliminarCategorias/:id", deleteCategoriasValidator, deleteCategorias);

export default router;