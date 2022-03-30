import { Request, Response } from 'express';
import Order from '../interfaces/order.interface';
import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';

export default class OrderController {
  constructor(
    private orderService = new OrderService(),
    private productService = new ProductService(),
    private productModel = new ProductModel(connection),
  ) { }
  
  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    const idsArr = orders.map(async (order) => {
      if (order.id) {
        const ordersIds: Product[] = await this.productModel.findProductById(order.id);
        const productsIds = ordersIds.map((product) => product.id);
        return { ...order, products: productsIds } as Order;
      }
      return { ...order, products: [] } as Order;
    });
    const promisedArr = await Promise.all(idsArr);
    return res.status(200).json(promisedArr);
  };
}