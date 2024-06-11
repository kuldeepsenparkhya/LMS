import db from '../models';
import {Request, Response } from 'express';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const data = { name, email, password };

    const user = await db.Categories.create(data);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
