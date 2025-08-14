import express from 'express';
import goalRouter from './routes/goalRouter.js';
import userRouter from './routes/userRouter.js';
import userGoalRouter from './routes/userGoalRouter.js';
import groupRouter from './routes/groupRouter.js';

const app = express();
app.use(express.json());

app.use('/goals', goalRouter);
app.use('/users', userRouter);
app.use('/userGoals', userGoalRouter);
app.use('/groups', groupRouter);


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});