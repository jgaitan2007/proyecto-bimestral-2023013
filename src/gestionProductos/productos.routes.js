import { Router } from "express";
import {
     addProduct

 } from "./productos.controller.js";
 import {
    addProductValidator
 } from "../middlewares/productos-validator.js";

 const router = Router();

 router.post("/addProduct", addProductValidator, addProduct);

 
 export default router;