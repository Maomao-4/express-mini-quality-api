const request = require('supertest');
const app = require('../index');

describe('GET /users', () => {
  test('debe responder con status 200', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  test('debe devolver un array', async () => {
    const response = await request(app).get('/users');
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('debe devolver exactamente 3 usuarios', async () => {
    const response = await request(app).get('/users');
    expect(response.body).toHaveLength(3);
  });

  test('cada usuario debe tener las propiedades id y name', async () => {
    const response = await request(app).get('/users');

    response.body.forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(typeof user.id).toBe('number');
      expect(typeof user.name).toBe('string');
    });
  });

  test('debe incluir usuarios con nombres específicos', async () => {
    const response = await request(app).get('/users');
    const names = response.body.map((user) => user.name);

    expect(names).toContain('Ana');
    expect(names).toContain('Luis');
    expect(names).toContain('Carlos');
  });
});
