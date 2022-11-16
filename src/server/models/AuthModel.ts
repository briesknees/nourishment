import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { request } from 'http';
import bcrypt from 'bcrypt';
import config from '.././constants/config';
const pg = require("pg");
const jwt = require ('jsonwebtoken')
require('dotenv').config()

class AuthModel {

	//this middleware checks to see if the username is taken in the database
	//sets res.locals.status to false if the username is already in the database
	//sets res.locals.status to true if the username is available
	public static async checkUser(req: Request, res: Response, next: NextFunction) {
		const { username } = req.body;
		const param = [username];
		try {
			//query to find the user in teh database
			const verifyUserQuery = `
			SELECT * FROM users;`
		//	WHERE username = $1`;
      const db = pg.client(config);
			const verifyResult = await db.query(verifyUserQuery, param);
			console.log(verifyResult)
			//user does not exist in database
			if (verifyResult.rows.length === 0){
				res.locals.status === true;
			}
			//if username already taken
			else{
				res.locals.status === false;
			}
			return next();
			
		}
		catch(error){
			return next({
				log: 'Express error in checkUser middleware',
				status: 400,
				message: {
					err: `AuthModel.checkUser: ERROR: ${error}`,
				},
			});
		}
	}

	//if res.locals.status is true, then create a user in the database
	public static async createUser(req: Request, res: Response, next: NextFunction) {
		try {
			if (res.locals.status === false) {
				next();
			}
			const { username, password, email } = req.body;
			//error occurs if the username or password field is blank
			if (!username || !password) {
				return res.status(401).json({ error: 'username or password parameter empty' });
			}

			//hash passwords asynchronously before storing it in db
			const saltRounds = 10;
			bcrypt.hash(password, saltRounds, (err, hash) => {
				if (err) {
					return next({
						log: `AuthModel.createUser: ERROR: Error hashing password: ${err}`,
						message: { err: 'Error hashing password' },
					});
				}

      //queries the db and inserts the user into the database
				const params = [{value: username, type: 'VARCHAR'}, {value: hash, type: 'VARCHAR'}, {value: email, type: 'VARCHAR'}]
				const newUserQuery = `
          INSERT INTO users(username, password, email)
          VALUES($1 AS VARCHAR,$2 AS VARCHAR, $3 AS VARCHAR)
          RETURNING *;`;
				const db = new pg.client(config);
				const result = db.query(newUserQuery, params)
				console.log('result')
				console.log(result);
				res.locals.username = result.rows[0].username;
				next();
			})
		}
		catch (error) {
			return next({
				log: 'Express error in createUser middleware',
				status: 400,
				message: {
					err: `AuthModel.createUser: ERROR: ${error}`,
				},
			});
		}
	}

	//queries db. if username and password pmatches, authenticates the user
	public static async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

		//query the database for the username and retrieve teh passowrd
		const params = [{value: username, type: 'VARCHAR'}]
    
		const query = 'placeholder'
		//
		const db = new pg.client(config);
		const userData = await db.query(query, [username])
		if (userData.rows[0] === undefined){
			return res.status(401).json({error: "username not found"})
		}
		const dbPassword = userData.rows[0].password;
		bcrypt.compare(password, dbPassword, (err, result) => {
			if (result === true){

			}
			else if (result === false){
      
			}
			
		})


	}

	public static deleteUser(req: Request, res: Response, next: NextFunction){

		
	}

	public static logout(req: Request, res: Response, next: NextFunction){

		
	}

	//upon successful login or signup, create a JWT token
	public static setJWT(req: Request, res: Response, next: NextFunction){
		//generate the token, then set the res.headers [authorization to the jwt token]
		const { username } = req.body;
    const user = {id: username}
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'48h'})
    res.locals.accessToken = accessToken;
		next();
	}
  

	//checks if there is a valid jwt token for authenitcation.
	//if it is a valid json token, then return the id of the user
	public static checkJWT(req: Request, res: Response, next: NextFunction) {
		console.log(req.headers)
    const authHeader:any = req.headers['authorization']
		console.log(authHeader)
		let token = null;
		if (authHeader){
			token = authHeader.split(' ')[1];
		}
		if (token === null) return res.sendStatus(401)

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err:any, user:any) => {
			if (err) return res.sendStatus(403)
			res.locals.user = user.id
			console.log(res.locals.user);
			next();
		})
	}


	public static setHeader(req: Request, res: Response, next: NextFunction){
    res.setHeader('authorization', 'Bearer ' + res.locals.accessToken)
		next()
	}
}

export default AuthModel;