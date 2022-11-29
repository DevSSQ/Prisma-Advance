import express from 'express';
import { getAllUsers, addUser } from '../controller/user.controller';
import validate from '../middleware/validate';
import { addUserSchema } from '../zod_schema/user.schema';

const router = express.Router();

router.get('', getAllUsers)
router.post('/addUser', validate(addUserSchema), addUser);

export default router;