import { hash } from "argon2";
import productosModel from "./productos.model.js";
import Categorias from "../gesitoncategorias/categorias.model.js";
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

export const updateProduct = async (req, res) => {
    try {
        const productData = req.body;
        const { id } = req.params;

        const updatedProduct = await productosModel.findByIdAndUpdate(id, productData, {
            new: true
        });

        return res.status(200).json({
            message: "Product has been updated",
            product: updatedProduct
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product update failed",
            error: err.message
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await productosModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Product has been deleted",
            product: deletedProduct
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product deletion failed",
            error: err.message
        });
    }
}

export const listarProductos = async (req, res) => {
    try {
        const products = await productosModel.find();

        return res.status(200).json({
            message: "Product list fetched successfully",
            products
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product list fetch failed",
            error: err.message
        });
    }
}

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productosModel.findById(id);

        return res.status(200).json({
            message: "Product fetched successfully",
            product
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product fetch failed",
            error: err.message
        });
    }
}

export const listarFueraDeStock = async (req, res) => {
    try {
        const products = await productosModel.find({ stock: { $lt: 0 } });

        return res.status(200).json({
            message: "Product list fetched successfully",
            products
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product list fetch failed",
            error: err.message
        });
    }
}

export const listarTopPoductos = async (req, res) => {
    try {
        const products = await productosModel.find().sort({ stock: -1 }).limit(5);

        return res.status(200).json({
            message: "Product list fetched successfully",
            products
        });
    } catch (err) {
        return res.status(500).json({
            message: "Product list fetch failed",
            error: err.message
        });
    }
}