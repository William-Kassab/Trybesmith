import express from 'express';

import ProductController from './controllers/product.controller';
import Register from './controllers/register.controller';
import OrderController from './controllers/order.controller';

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
const ordersController = new OrderController();

app.get('/products', productsController.getAllProducts);

app.post('/products', isNameValid, isAmountValid, productsController.createProducts);

app.post('/users', isUsernameValid, isClassValid, isLevelValid, isPasswordValid, register.register);

app.get('/orders', ordersController.getAllOrders);

export default app;
