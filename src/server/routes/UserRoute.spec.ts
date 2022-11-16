import { Server } from 'http';
import supertest from 'supertest'
import app from '../server'

describe('Responses in UserRoute do not respond with 404 for:', () => {

  let server: Server | null = null;
  let request = null;

  beforeAll( (done) => {
    server = app.listen(done);
    request = supertest.agent(server);
  });

  it('Get Requests', async () => {
      const res = await supertest(app)
          .get('/api/user')

      expect(res.status).not.toBe(404)
  })

  afterAll( done => {
    server ? server.close(done) : null;
  })

})
