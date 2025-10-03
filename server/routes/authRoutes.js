// ENDPOINT DE USUARIOS
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

/**
 * POST /auth/login
 * Recibe un username y un role, devuelve un token JWT válido.
 * En un proyecto real, esto se valida contra una base de datos.
 */
router.post("/login", (req, res) => {
  const { username, role } = req.body;

  if (!username || !role) {
    return res.status(400).json({ message: "Username and role are required" });
  }

  // Creamos el JWT
  const token = jwt.sign(
    { username, role },           // payload
    process.env.JWT_SECRET,       // secreto de .env
    { expiresIn: "1h" }           // expira en 1 hora
  );

  res.json({ token });
});

// Exportamos el router como default
export default router;
