import { Book } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';

export const getAllBooks = async (req: Request, res: Response) => {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  };

  export const addBook = async (req: Request, res: Response) => {
    const newBook = req.body as Book;
    await prisma.book.create({
      data: newBook,
    });
    res.status(201).json({
      message: 'Book is added !',
    });
  };
 