import express from 'express';
import { getUserGoals } from '../controllers/userGoalController.js';

const router = express.Router();

router.get('/:id', getUserGoals);

export default router;