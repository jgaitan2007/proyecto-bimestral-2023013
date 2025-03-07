import { body } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { productExists } from "../helpers/db-validators.js";

export const agregarcarritoValidator = [
    body('producto').isMongoId().withMessage('No es un ID válido de MongoDB'),
    body('producto').custom(productExists),
    body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero positivo'),
    validarCampos,
    handleErrors
];
