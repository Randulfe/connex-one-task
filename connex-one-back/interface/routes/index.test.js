const app = require('../../app');
const request = require('supertest');

describe('Time', () => {
  it('should return the time in the right format', async () => {
    const response = await request(app).get('/time').
        set('Authorization', 'mysecrettoken');
    request(app).get('/time');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('epoch');
    expect(typeof response.body.epoch).toBe('number');
  });
});
