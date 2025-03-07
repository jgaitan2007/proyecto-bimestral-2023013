"use strict";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnection } from "./mongo.js";
import productosRoutes from "../src/gestionProductos/productos.routes.js";
import authRoutes from "../src/auth/auth.routes.js";
import userRoutes from "../src/user/user.routes.js";
import categoriasRoutes from "../src/gesitoncategorias/categorias.routes.js";
import carritoRoutes from "../src/carrito/cart.routes.js";
import purchaseRoutes from '../src/gestionCompras/Compras.routes.js';
import facturasRoutes from "../src/gestionFacturas/facturas.routes.js"; 
import { createAdminUser } from "../src/auth/auth.controller.js";
import apiLimiter from "../src/middlewares/rate-limit-validator.js";
import { swaggerDocs, swaggerUi } from "./swagger.js";

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(apiLimiter);
};

const routes = (app) => {
    app.use("/proyectoBimestral-2023013/v1/productos", productosRoutes);
    app.use("/proyectoBimestral-2023013/v1/productos/auth", authRoutes);
    app.use("/proyectoBimestral-2023013/v1/productos/user", userRoutes);
    app.use("/proyectoBimestral-2023013/v1/productos/gestionProductos", productosRoutes);
    app.use("/proyectoBimestral-2023013/v1/gestionCategorias", categoriasRoutes);
    app.use("/proyectoBimestral-2023013/v1/carrito", carritoRoutes);
    app.use("/proyectoBimestral-2023013/v1/purchase", purchaseRoutes);
    app.use("/proyectoBimestral-2023013/v1/facturas", facturasRoutes);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

};

const conectarDB = async () => {
    try {
        await dbConnection();
    } catch (err) {
        console.log(`Database connection failed: ${err}`);
        process.exit(1);
    }
};

export const initServer = () => {
    const app = express();
    try {
        middlewares(app);
        conectarDB();
        routes(app);
        createAdminUser();
        const port = process.env.PORT || 3001; // Asegúrate de que el puerto sea 3001
        app.listen(port, () => {
            console.log(`Server running on port ${port} matutina`);
        });
    } catch (err) {
        console.log(`Server init failed: ${err}`);
    }
};

