import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";

export const addProductValidator = [
    // Aquí puedes agregar las validaciones necesarias
    body('name').notEmpty().withMessage('Name is required'),
    body('descripcion').notEmpty().withMessage('la descripcion es necesaria'),
    body('precio').notEmpty().withMessage("el precio es requerido"),
    body('stock').notEmpty().withMessage("El stock de productos es requerido"),
    validarCampos,
    handleErrors
];

// Exportar la función addProductValidator
export default addProductValidator;