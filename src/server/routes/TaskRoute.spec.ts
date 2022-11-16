import { Server } from 'http';
import supertest from 'supertest'
import app from '../server'

describe('Responses in TaskRoute do not respond with 404 for:', () => {

  let server: Server | null = null;
  let request = null;

  beforeAll( (done) => {
    server = app.listen(done);
    request = supertest.agent(server);
  });

  it('Post Requests', async () => {
      const res = await supertest(app)
          .post('/api/tasks/')
          .send({example: 'data'})

      expect(res.status).not.toBe(404)
  })

  it('Patch Requests', async () => {
    const res = await supertest(app)
        .patch('/api/tasks/')
        .send({example: 'data'})

    expect(res.status).not.toBe(404)
})

it('Delete Requests', async () => {
  const res = await supertest(app)
      .delete('/api/tasks/exampleTaskId')

  expect(res.status).not.toBe(404)
})

  afterAll( done => {
    server ? server.close(done) : null;
  })

})
