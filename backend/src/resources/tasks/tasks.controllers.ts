import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { JwtPayload } from 'jsonwebtoken'
import { AuthenticatedRequest } from '../../middleware/authMiddleware'

const prisma = new PrismaClient();

/**
 * @description Get all tasks
 * @route GET /tasks
 */

export async function getTasks(req: Request, res: Response) {
  try {
    const todos = await prisma.task.findMany();

    if (!todos.length)
      return res.status(404).json({ message: "No tasks found" });

    res.status(200).json(todos);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * @description Get project tasks
 * @route GET /project/:id/tasks
 */

export async function getProjectTasks(req: AuthenticatedRequest, res: Response) {
  try {
    const user = req.user as JwtPayload;
    const userId = user.id;

    const tasks = await prisma.task.findMany({
      where: {
        authorId: userId,
      },
    });

    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this project" });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  } finally {
    await prisma.$disconnect();
  }
}

//POST todos
export async function createTask(req: Request, res: Response) {
  try {
    const id = 
    const { title, description, status, finishedBy } = req.body;

    const newTodo = await prisma.task.create({
      where: { id: Number(id) },
      data: {
        title,
        description,
        status,
        finishedBy,
      },
    });

    res
      .status(201)
      .json({ id: newTodo.id, message: "Todo created!", title: newTodo.title, status: newTodo.status, authorId: newTodo.authorId, color: newTodo.color, content: newTodo.content });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  } finally {
    await prisma.$disconnect();
  }
}

//Delete todo
export async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;

    // Kontrollera att id:t är ett giltigt nummer
    if (isNaN(Number(id))) {
      return res.status(400).json({ error: "Invalid ID parameter!" });
    }

    const deletedTodo = await prisma.task.delete({
      where: { id: Number(id) }, 
    });

    // Om ingen todo hittas med det specifika id:t
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found!" });
    }

    res.status(200).json({ message: "Todo deleted!", todo: deletedTodo });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  }
}

//Update todo
export async function updateTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const updatedTodo = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        status,
      },
    });

    res.status(200).json({ message: "Todo updated!", todo: updatedTodo });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  } finally {
    await prisma.$disconnect();
  }
}

//Update only status of todo
export async function updatePartialTask(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTodo = await prisma.task.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.status(200).json({ message: "Status updated!", todo: updatedTodo });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  } finally {
    await prisma.$disconnect();
  }
}