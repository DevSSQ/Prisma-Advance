import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  };

  export const addUser = async (req: Request, res: Response) => {
    const newUser = req.body as User;
    await prisma.user.create({
      data: newUser,
    });
    res.status(201).json({
      message: 'User is added !',
    });
  };
 