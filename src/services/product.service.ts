import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }

  public createProducts(product: Product): Promise<Product> {
    return this.model.createProducts(product);
  }
}