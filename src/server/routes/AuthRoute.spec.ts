import { Server } from "http";
import supertest from "supertest";
import app from "../server";

describe('Auth route tests', () => {


	describe('Responses in AuthRoute do not respond with 404 for:', () => {

		let server: Server | null = null;
		let request = null;

		beforeAll((done) => {
			server = app.listen(done);
			request = supertest.agent(server);
		});

		it('Post Requests', async () => {
			const res = await supertest(app)
				.post('/api/auth/create')
				.send({ example: 'data' })

			expect(res.status).not.toBe(404)
		})

		afterAll(done => {
			server ? server.close(done) : null;
		})
	})

	describe('Create Route', () => {
		let server: Server | null = null;
		let request = null;

		beforeAll((done) => {
			server = app.listen(done);
			request = supertest.agent(server);
		});
    
		it('POST /create Should write to db and return the username',async () => {
			const res = await supertest(app)
			  .post('/api/auth/create')
				.send({username: 'test', password: '123456'})
			expect(res.status).toBe(200)
			expect(res.body).toBe({data:'test'})
		})

		it('should return a status of 401 if the user is already in the database and an error message', async () => {
     const res = await supertest(app)
      .post('/api/auth/create')
			.send({username: 'test', password: '123456'})
		 
	  const res2 = await supertest(app)
		  .post('/api/auth/create')
			.send({username: 'test', password: '123456'})
			expect(res.status).toBe(401)
			expect(res.body).toBe({error:'username taken'})
		})

		it('the password should be hashed before inserting into the database', async () => {
			//how to write this test?
		})

		afterAll(done => {
			server ? server.close(done) : null;
		})
	})

	describe('JWT Tokens', () => {
		let server: Server | null = null;
		let request = null;

		beforeAll((done) => {
			server = app.listen(done);
			request = supertest.agent(server);
		});

		it('JWT Tokens should be generated on login', async() => {
		  const res = await supertest(app)
			.post('/api/auth/create')
		  .send({username: 'jonathan', password: '123456'})
		  expect(res.headers).toBe(200)
		  expect(res.headers.authorization).not.toBe(undefined);
		})
	})

})
