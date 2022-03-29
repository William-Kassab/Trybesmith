import express from 'express';
import ProductController from './controllers/product.controller';
import { isNameValid, isAmountValid } from './middlewares/product.middleware';

const app = express();

app.use(express.json());

const productsController = new ProductController();

app.get('/products', productsController.getAllProducts);

app.post('/products', isNameValid, isAmountValid, productsController.createProducts);

export default app;
