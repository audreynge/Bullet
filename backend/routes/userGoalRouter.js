import express from 'express';
import { listUserGoals } from '../controllers/userGoalController.js';

const router = express.Router();

router.get('/:id', listUserGoals);

export default router;