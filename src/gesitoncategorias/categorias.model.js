import { Schema, model } from "mongoose";

const categoriasSchema = Schema({
    nombre:{
        type: String,
        required: [true, "Nombre es requerido"],
        maxLength: [25, "Nombre no puede exceder de 25 caracteres"]
    },
    descripcion:{
        type: String,
        required: [true, "Descripcion es requerida"],
        maxLength: [25, "Descripcion no puede exceder de 25 caracteres"]
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Categorias", categoriasSchema)