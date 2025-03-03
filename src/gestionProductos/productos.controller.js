import { hash } from "argon2";
import productosModel from "./productos.model.js";
import fs from "fs/promises";
import { fileURLToPath } from "url";

export const addProduct = async (req, res) => {
    try {
        const productData = req.body;

        const newProduct = await productosModel.create(productData);

        return res.status(201).json({
            message: "Product has been created",
            product: newProduct
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product creation failed",
            error: err.message
        });
    }
}