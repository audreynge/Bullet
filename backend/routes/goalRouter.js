import express from 'express';
import { listGoals, addGoal } from '../controllers/goalController.js';

const router = express.Router();

router.get('/', listGoals);
router.post('/', addGoal);

export default router;