import { NextFunction, Request, Response } from 'express';

export const isNameValid = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ error: 'Name is required' });

  if (typeof name !== 'string') return res.status(422).json({ error: 'Name must be a string' });

  if (name.length < 3) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }
  next();
};

export const isAmountValid = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) return res.status(400).json({ error: 'Amount is required' });

  if (typeof amount !== 'string') return res.status(422).json({ error: 'Amount must be a string' });

  if (amount.length < 3) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }
  next();
};
