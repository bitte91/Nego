
const request = require('supertest');
const app = require('./index');

describe('Server', () => {
  it('should serve the index.html file', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.headers['content-type']).toMatch(/html/);
  });
});
