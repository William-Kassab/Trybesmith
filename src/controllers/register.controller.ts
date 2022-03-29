import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const secret = '12345';

export default class Register {
  public register = (req: Request, res: Response) => {
    const { username } = req.body;
  
    const token = jwt.sign({ data: username }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
  
    return res.status(201).json({ token });
  };
}
