import request from 'supertest';
import app from '../../src/app';
import { prisma } from '../../src/utils/prisma';

describe('POST /auth/login', () => {
  let email: string;
  let password: string;

beforeAll(async () => {
  await prisma.projectMember.deleteMany();
  await prisma.task.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  const unique = Date.now();
  email = `test-${unique}@example.com`;
  password = 'myplaintextpassword';

  await prisma.user.create({
    data: {
      username: `testuser-${unique}`,
      email,
      name: 'Test User',
      password: await import('bcrypt').then(bcrypt => bcrypt.hash(password, 10))
    }
  });
});


  it('should successfully login', async () => {
    const loginRes = await request(app)
    .post('/trullodb/auth/login')
    .send({ email, password });

    expect(loginRes.statusCode).toBe(200);
    expect(loginRes.body).toHaveProperty('token');
  });

});
