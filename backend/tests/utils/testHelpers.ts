import jwt from 'jsonwebtoken';
import { prisma } from '../../src/utils/prisma'; 

const JWT_SECRET = process.env.JWT_SECRET || 'test_secret';

export async function createTestUserAndToken() {
    const unique = Date.now();
    const email = `test-${unique}@example.com`;
    const username = `testuser-${unique}`;
    const password = 'myplaintextpassword';
    const bcrypt = await import('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
        username,
        email,
        password: hashedPassword,
        name: 'testuser'
        },
    });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    return {
        username: user.username,
        email: user.email,
        password,
        id: user.id,
        jwt: token
    };
    }


export async function seedTasksForUser(userId: number, tasks: {title: string}[]) {
    for (const task of tasks) {
        await prisma.task.create({
            data: {
                title: task.title,
                description: 'test description',
                status: 'IN_PROGRESS',
                authorId: userId,
            }
        })
    }
}
