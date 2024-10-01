import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const prisma = new PrismaClient();

  /**
   * @description 
   * @route POST /auth/login
   */

export async function loginUser(req:Request, res:Response){

    
}