// ENDPOINTS DE PRODUCTOS
import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

// TO-DO: Importar middlewares de autenticacion y autorizacion
// import { apiKeyMiddleware } from "../middlewares/apiKeyMiddleware.js";
// import { authMiddleware, roleMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rutas de productos

// Listar productos (ej: GET /products?page=1&limit=10)
// Cuando se implemente autenticacion:
// router.get("/", apiKeyMiddleware, getProducts);
router.get("/", getProducts);

// Detalle de un producto por ID (ej: GET /products/123)
// router.get("/:id", apiKeyMiddleware, getProductById);
router.get("/:id", getProductById);

// Crear un producto nuevo (ej: POST /products)
// router.post("/", authMiddleware, roleMiddleware(["editor", "admin"]), createProduct);
router.post("/", createProduct);

// Actualizar un producto existente (ej: PUT /products/123)
// router.put("/:id", authMiddleware, roleMiddleware(["editor", "admin"]), updateProduct);
router.put("/:id", updateProduct);

// Eliminar un producto (ej: DELETE /products/123)
// router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), deleteProduct);
router.delete("/:id", deleteProduct);

export default router;
