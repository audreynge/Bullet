import express from 'express';
import goalRouter from './routes/goalRouter.js';
import userRouter from './routes/userRouter.js';
import userGoalRouter from './routes/userGoalRouter.js';
import groupRouter from './routes/groupRouter.js';
import db from './db.js';

const app = express();
app.use(express.json());

app.use('/goals', goalRouter);
app.use('/users', userRouter);
app.use('/userGoals', userGoalRouter);
app.use('/groups', groupRouter);

app.use('/test-db', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error('DB test error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});