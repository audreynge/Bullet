import express from 'express';
import goalRouter from './routes/goalRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
app.use(express.json());

app.use('/goals', goalRouter);
app.use('/users', userRouter);


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});