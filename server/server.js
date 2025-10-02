import express from 'express';
//import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
// TO-DO: Descomentar cuando se implemente autenticacion
//app.use('/auth', authRoutes);
app.use("/products", productRoutes);

// Manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});