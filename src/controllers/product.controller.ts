import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    return res.status(200).json(products);
  };

  public createProducts = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.createProducts(product);
    return res.status(201).json({ item: productCreated });
  };
}