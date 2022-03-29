import express from 'express';

import ProductController from './controllers/product.controller';
import Register from './controllers/register.controller';

import { isNameValid, isAmountValid } from './middlewares/product.middleware';
import {
  isUsernameValid,
  isClassValid,
  isLevelValid,
  isPasswordValid,
} from './middlewares/register.middleware';

const app = express();

app.use(express.json());

const productsController = new ProductController();
const register = new Register();

app.get('/products', productsController.getAllProducts);

app.post('/products', isNameValid, isAmountValid, productsController.createProducts);

app.post('/users', isUsernameValid, isClassValid, isLevelValid, isPasswordValid, register.register);

export default app;
