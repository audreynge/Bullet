// imports the controllers here
import express from 'express';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);

export default router;