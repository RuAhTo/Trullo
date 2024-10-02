import express from 'express'
import { loginUser } from './auth.controllers'
import { verifyToken } from '../../middleware/authMiddleware';

const router = express.Router();

router.post('/auth/login', verifyToken, loginUser);

export default router