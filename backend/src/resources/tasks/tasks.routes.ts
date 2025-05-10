import express from 'express';
import { getTasks } from './tasks.controllers';

const router = express.Router();
router.get('/tasks', getTasks);

export default router;
