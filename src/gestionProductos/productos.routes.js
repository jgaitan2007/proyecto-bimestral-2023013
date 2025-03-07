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

router.post("/addProduct", addProductValidator, addProduct);

router.get("/listarProductos", listarProductos);

router.get("/getProductById/:id", getProductById);

router.put("/updateProduct/:id", updateProductValidator, updateProduct);

router.delete("/deleteProduct/:id", deleteProductValidator, deleteProduct);

router.get("/listarFueraDeStock", listarFueraDeStock);

router.get("/listarTopPoductos", listarTopPoductos);

export default router;