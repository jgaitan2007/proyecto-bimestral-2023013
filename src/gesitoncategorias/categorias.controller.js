import Categorias from "./categorias.model.js";

export const addCategorias = async (req, res) => {
    try {
        const categorias = new Categorias(req.body);
        const categoriasCreated = await categorias.save();
        res.status(201).json(categoriasCreated);
    } catch (error) {
        res.status(500).json({ 
            error: "Error al agregar la categoria",
            details: error.message
        });
    }
}

export const getCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las categorias" });
    }
}

export const updateCagorias = async (req, res) => {
    try {
        const categorias = await Categorias.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la categoria" });
    }
}

export const deleteCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.findByIdAndDelete(req.params.id);
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la categoria" });
    }
}