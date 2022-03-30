import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Order[]> {
    const result = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [rows] = result;

    return rows as Order[];
  }
}