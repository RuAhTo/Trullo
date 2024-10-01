import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from './users.controllers'

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/users', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router