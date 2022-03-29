import { Pool } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = products;
    return rows as Product[];
  }
}
