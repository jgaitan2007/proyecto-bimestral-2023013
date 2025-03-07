import { Router } from "express";
import { agregarCarrito } from "./cart.controller.js";
import { agregarcarritoValidator } from "../middlewares/cart-validators.js";
import { validateJWT } from "../middlewares/validate-jwt.js";

const router = Router();

router.post("/agregarAlCarrito", validateJWT, agregarcarritoValidator, agregarCarrito);

export default router;