import { Schema, model } from "mongoose";

const gestionProductosSchema = Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [25, "Name cannot exceed 25 characters"]
    },

    descripcion: {
        type: String,
        required: [true, "La descripcion es requerida"]
    },

    profilePicture: {
        type: String
    },

    precio: {
        type: Number,
        min: 0,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock no puede ser negativo']
    },

    productosVendidos: {
        type: Number,
        default: 0
    }
},

{
    versionKey: false,
    timestamps: true
});

export default model("productos", gestionProductosSchema);