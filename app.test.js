const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('sollte "Hallo Welt!" zurückgeben', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hallo Welt!', done);
  });
});
