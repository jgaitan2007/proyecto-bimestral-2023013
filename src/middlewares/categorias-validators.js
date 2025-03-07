import { body, param } from "express-validator";
import { handleErrors } from "./handle-errors.js";
import { categoriasExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validate-roles.js";

export const addCategoriasValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("descripcion").notEmpty().withMessage("La descripcion es requerida"),
    validarCampos,
    handleErrors
];

export const updateCategoriasValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(categoriasExists),
    validarCampos,
    handleErrors
];

export const deleteCategoriasValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("id").custom(categoriasExists),
    validarCampos,
    handleErrors
];