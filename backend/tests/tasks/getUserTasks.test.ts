import request from 'supertest';
import app from '../../src/app';
import { createTestUserAndToken, seedTasksForUser } from '../utils/testHelpers';
import { prisma } from '../../src/utils/prisma';

describe('GET /users/tasks', () => {
  let userId: number;
  let token: string;

  beforeAll(async () => {
    await prisma.projectMember.deleteMany();
    await prisma.task.deleteMany();
    await prisma.project.deleteMany();
    await prisma.user.deleteMany();

    const result = await createTestUserAndToken();
    userId = result.id;
    token = result.jwt;

    await seedTasksForUser(userId, [
      { title: 'Task 1' },
      { title: 'Task 2' }
    ]);
  });

  it('should return tasks for the authenticated user', async () => {
    const res = await request(app)
      .get(`/trullodb/users/tasks`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.tasks).toHaveLength(2);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
