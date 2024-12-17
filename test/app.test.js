const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with "Hello, CI/CD Pipeline with Kubernetes!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, CI/CD Pipeline with Kubernetes!', done);
  });
});
