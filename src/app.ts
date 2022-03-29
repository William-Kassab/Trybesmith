import express from 'express';
import ProductController from './controllers/product.controller';

const app = express();

app.use(express.json());

const productsController = new ProductController();

app.get('/products', productsController.getAllProducts);

export default app;
