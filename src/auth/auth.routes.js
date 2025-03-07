import { Router } from "express";
import { register, login } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/user-validators.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { hasRoles } from "../middlewares/validate-roles.js";

const router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's first name
 *                 example: John
 *               surname:
 *                 type: string
 *                 description: User's surname
 *                 example: Doe
 *               username:
 *                 type: string
 *                 description: Unique username
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: password123
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture file
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *                 example: 12345678
 *               role:
 *                 type: string
 *                 description: User's role
 *                 example: USER_ROLE
 *     responses:
 *       201:
 *         description: User has been created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User has been created
 *                 name:
 *                   type: string
 *                   example: John
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *       500:
 *         description: User registration failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registration failed
 *                 error:
 *                   type: string
 *                   example: Error message
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: password123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: jwt_token
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid credentials
 */

router.post(
  "/register",
  uploadProfilePicture.single("profilePicture"),
  registerValidator,
  register
);

router.post(
  "/login",
  loginValidator,
  login
);

/**
 * @swagger
 * /adminRegister:
 *   post:
 *     summary: Register a new admin user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Admin's first name
 *                 example: John
 *               surname:
 *                 type: string
 *                 description: Admin's surname
 *                 example: Doe
 *               username:
 *                 type: string
 *                 description: Unique username
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: Admin's email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 description: Admin's password
 *                 example: password123
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture file
 *               phone:
 *                 type: string
 *                 description: Admin's phone number
 *                 example: 12345678
 *               role:
 *                 type: string
 *                 description: Admin's role
 *                 example: ADMIN_ROLE
 *     responses:
 *       201:
 *         description: Admin user has been created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Admin user has been created
 *                 name:
 *                   type: string
 *                   example: John
 *                 email:
 *                   type: string
 *                   example: johndoe@example.com
 *       500:
 *         description: Admin registration failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Admin registration failed
 *                 error:
 *                   type: string
 *                   example: Error message
 */

router.post(
  "/adminRegister",
  validateJWT,
  hasRoles("ADMIN_ROLE"),
  uploadProfilePicture.single("profilePicture"),
  registerValidator,
  register
  
);


export default router;
