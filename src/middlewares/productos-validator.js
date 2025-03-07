import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { productExists } from "../helpers/db-validators.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-roles.js";

export const addProductValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body('name').notEmpty().withMessage('Name is required'),
    body('descripcion').notEmpty().withMessage('La descripcion es necesaria'),
    body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo'),
    body('categoria').isMongoId().withMessage('No es un ID válido de MongoDB'),
    body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
    validarCampos,
    handleErrors
];

export const updateProductValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param('id').isMongoId().withMessage('No es un ID válido de MongoDB'),
    param('id').custom(productExists),
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('descripcion').optional().notEmpty().withMessage('La descripcion es necesaria'),
    body('precio').optional().isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo'),
    body('categoria').optional().isMongoId().withMessage('No es un ID válido de MongoDB'),
    body('stock').optional().isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
    validarCampos,
    handleErrors
];

export const deleteProductValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param('id').isMongoId().withMessage('No es un ID válido de MongoDB'),
    param('id').custom(productExists),
    validarCampos,
    handleErrors
];

export default addProductValidator;