import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { request } from 'http';
//import db from './database';
import bcrypt from 'bcrypt';
const jwt = require ('jsonwebtoken')
require('dotenv').config()

class AuthModel {

	//this middleware checks to see if the username is taken in the database
	//sets res.locals.status to false if the username is already in the database
	//sets res.locals.status to true if the username is available
	/*public static async checkUser(req: Request, res: Response, next: NextFunction) {
		const { username } = req.body;
		const param = [username];
		try {
			//query to find the user in teh database
			const verifyUserQuery = `
			SELECT * FROM users
			WHERE username = $1`;
      
			const verifyResult = await db.query(verifyUserQuery, param);
		  
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
				const params = [username, hash, email]
				const newUserQuery = `
          INSERT INTO users(id, password, email)
          VALUES($1,$2, $3)
          RETURNING *;`;

				const result = db.query(newUserQuery, params)
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
*/
	//queries db. if username and password pmatches, authenticates the user
	public static login(req: Request, res: Response, next: NextFunction) {

	}

	//sets the cookie to the jwt token????
	public static setCookie(req: Request, res: Response, next: NextFunction){
		
	}

	public static deleteUser(req: Request, res: Response, next: NextFunction){

		
	}

	//upon successful login or signup, create a JWT token
	public static setJWT(req: Request, res: Response, next: NextFunction){
		//generate the token, then set the res.headers [authorization to the jwt token]
		const { username } = req.body;
    const user = {id: username}
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.locals.accessToken = accessToken;
		console.log(accessToken);
		next();
	}
  

	//checks if there is a valid jwt token for authenitcation.
	public static checkJWT(req: Request, res: Response, next: NextFunction) {
    const authHeader:any = req.headers['authorization']
		const token = authHeader && authHeader.split[' '][1];
		if (token === null) return res.sendStatus(401)

		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err:any, user:any) => {
			if (err) return res.sendStatus(403)
			res.locals.user = user
			console.log(user);
			next();
		})


	}
}

export default AuthModel;