import express, {Request, Response, NextFunction} from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import { PrismaClient } from "@prisma/client";

import usersRouter from "./resources/users/users.routes";
import projectsRouter from './resources/projects/projects.routes'
import authRouter from './resources/auth/auth.routes'
import tasksRouter from './resources/tasks/tasks.routes'

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/trullodb', usersRouter)
app.use('/trullodb', projectsRouter)
app.use('/trullodb', authRouter)
app.use('/trullodb', tasksRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
})

process.on('SIGNIT', async () => {
    await prisma.$disconnect();
    process.exit(0);
})