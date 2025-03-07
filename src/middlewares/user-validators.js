import User from "../user/user.model.js";
import { body, param } from "express-validator";
import { emailExists, usernameExists, userExists } from "../helpers/db-validators.js";
import { validarCampos } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { handleErrors } from "./handle-errors.js";

export const updateUserRole = async (uid) => {
    const user = await User.findById(uid);
    if (!user) {
        throw new Error("Usuario no encontrado");
    }
    // Permitir que los administradores actualicen usuarios con cualquier rol
    if (user.role !== "CLIENT_ROLE" && user.role !== "ADMIN_ROLE") {
        throw new Error("No tienes permisos para realizar esta acción");
    }
};

export const registerValidator = [
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validarCampos,
    deleteFileOnError,
    handleErrors
];

export const loginValidator = [
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("username").optional().isString().withMessage("Username es en formáto erróneo"),
    body("password").isLength({ min: 4 }).withMessage("El password debe contener al menos 8 caracteres"),
    validarCampos,
    handleErrors
];

export const getUserByIdValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(userExists),
    validarCampos,
    handleErrors
];

export const deleteUserValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(userExists),
    validarCampos,
    handleErrors
];

export const updatePasswordValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(userExists),
    body("newPassword").isLength({ min: 8 }).withMessage("El password debe contener al menos 8 caracteres"),
    validarCampos,
    handleErrors
];

export const updateUserValidator = [
    param("uid", "No es un ID válido").isMongoId(),
    param("uid").custom(userExists),
    validarCampos,
    handleErrors
];

export const updateUserRoleValidator = [
    param("uid", "No es un ID válido").isMongoId(),
    param("uid").custom(userExists),
    param("uid").custom(updateUserRole),
    body("role").notEmpty().withMessage("El rol es necesario"),
    validarCampos,
    handleErrors
];

export const updateProfilePictureValidator = [
    param("uid").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("uid").custom(userExists),
    param("uid").custom(updateUserRole),
    validarCampos,
    deleteFileOnError,
    handleErrors
];

export const deletConfirmationUserValidator = [
    body("confirm").isString().withMessage("Confirmación es requerida"),
    body("confirm").isIn(["yes", "no"]).withMessage("Confirmación debe ser 'yes' o 'no'"),
    validarCampos,
    handleErrors
];