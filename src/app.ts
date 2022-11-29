import express from 'express';
import userRoute from './routes/user.route';
import bookRoute from './routes/book.route';
import loanRoute from './routes/loan.route'

import 'dotenv/config';
import { connectDB } from './config/db';


const app = express();

// Methods
connectDB();

// Middleware
app.use(express.json());
app.use('api/v1/user', userRoute);
app.use('/api/v1/book', bookRoute);
app.use('/api/v1/loan', loanRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running in port : ' + PORT);
});