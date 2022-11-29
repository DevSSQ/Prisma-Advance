import express from 'express';
import { getAllBooks, addBook } from '../controller/book.controller';
import validate from '../middleware/validate';
import { bookSchema } from '../zod_schema/book.schema';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/addBook', validate(bookSchema), addBook);

export default router;