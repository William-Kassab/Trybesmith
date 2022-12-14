import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [rows] = result;
    return rows as Product[];
  }

  public async createProducts(product: Product): Promise<Product> {
    const { name, amount } = product;

    const result = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?)`, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async findProductById(id: number): Promise<Product[]> {
    const [productArray] = await this.connection.execute(`SELECT * FROM Trybesmith.Products
    WHERE orderId = ?;`, [id]);
    return productArray as Product[];
  }
}
