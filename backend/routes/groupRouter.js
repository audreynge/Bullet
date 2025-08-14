import express from 'express';
import { listGroups, getGroup, joinGroup } from '../controllers/groupController.js';

const router = express.Router();

router.get('/', listGroups);
router.get('/:id', getGroup);
router.post('/', joinGroup);

export default router;