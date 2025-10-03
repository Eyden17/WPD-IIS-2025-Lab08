import express from "express";
import { login } from "../controller/authController.js";

const router = express.Router();

/**
 * POST /auth/login
 * Recibe un username y un role, devuelve un token JWT válido.
 */
router.post("/login", login);

export default router;
