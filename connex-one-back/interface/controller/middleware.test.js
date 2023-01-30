const app = require('../../app');
const request = require('supertest');

describe('AuthMiddleware', () => {
  it('should return error with right format if no auth header', async () => {
    const response = await request(app).get('/time');
    expect(response.statusCode).toBe(403);
    expect(response.body).toStrictEqual({message: 'Not authorised'});
  });
  it('should return error with right format if auth header is incorrect',
      async () => {
        const response = await request(app).get('/time')
            .set('Authorization', 'failedToken');
        expect(response.statusCode).toBe(403);
        expect(response.body).toStrictEqual({message: 'Not authorised'});
      });
  it('should pass if auth header is correct',
      async () => {
        const response = await request(app).get('/time')
            .set('Authorization', 'mysecrettoken');
        expect(response.statusCode).toBe(200);
      });
});
