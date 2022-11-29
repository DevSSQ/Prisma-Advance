import express from 'express';
import validate from '../middleware/validate';
import { loanSchema, loanParamsSchema } from '../zod_schema/loan.schema';
import { getAllLoans, addLoan, lendBook } from '../controller/loan.controller';



const router = express.Router();

router.get('/', getAllLoans);
router.post('/addLoan', validate(loanSchema), addLoan);
router.post('/lendBook', validate(loanParamsSchema), lendBook);


export default router;