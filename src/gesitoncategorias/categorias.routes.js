import { Router } from "express";
import { addCategorias, getCategorias, updateCagorias, deleteCategorias } from "./categorias.controller.js";
import { addCategoriasValidator, updateCategoriasValidator, deleteCategoriasValidator } from "../middlewares/categorias-validators.js";

const router = Router();

router.post("/agregarCategorias", addCategoriasValidator, addCategorias);

router.get("/listar", getCategorias);

router.put("/actualizarCategorias/:id", updateCategoriasValidator, updateCagorias);

router.delete("/eliminarCategorias/:id", deleteCategoriasValidator, deleteCategorias);

export default router;