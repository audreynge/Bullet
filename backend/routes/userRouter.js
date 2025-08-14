import express from 'express';
import { listUsers, getUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUser);

export default router;