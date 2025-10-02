import fs from "fs/promises";
import path from "path";
const dbPath = path.resolve("db/products.json");

// Funcion para leer todos los productos
export const getAllProducts = async () => {
  const data = await fs.readFile(dbPath, "utf-8");
  return JSON.parse(data);
};

// Funcion para obtener un producto por su ID
export const getProductById = async (id) => {
  const products = await getAllProducts();
  return products.find(p => p.id === id);
};

// Funcion para crear un nuevo producto
export const createProduct = async (productData) => {
  const products = await getAllProducts();

  // Validaciones sencillas
  if (!productData.name || !productData.sku || productData.price <= 0 || productData.stock < 0) {
    throw { statusCode: 422, message: "Invalid product data" };
  }
  if (products.find(p => p.sku === productData.sku)) {
    throw { statusCode: 409, message: "SKU already exists" };
  }

  // Crear el nuevo producto
  const newProduct = { id: String(Date.now()), ...productData };
  products.push(newProduct);

  // Guardar en el JSON
  await fs.writeFile(dbPath, JSON.stringify(products, null, 2));
  return newProduct;
};

// TO-DO: Implementar updateProduct y deleteProduct
