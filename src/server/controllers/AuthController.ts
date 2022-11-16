import { Request, Response, NextFunction } from 'express';
import express from 'express';
import AuthModel from '../models/AuthModel';


class AuthController {
  
	public static checkUser(req: Request, res: Response, next: NextFunction ) {
    AuthModel.checkUser(req, res, next)
	}

	public static createUser(req: Request, res: Response, next: NextFunction ) {
    AuthModel.createUser(req,res,next);
	}
	
	public static login(req: Request, res: Response, next: NextFunction ) {
    AuthModel.login(req, res, next)
	}

	public static deleteUser(req: Request, res: Response, next: NextFunction ) {
		AuthModel.deleteUser(req, res, next)
	}
	public static logout(req: Request, res: Response, next: NextFunction ) {
    AuthModel.logout(req, res, next)
	}

	public static setJWT(req: Request, res: Response, next: NextFunction ) {
    AuthModel.setJWT(req, res, next)
	}

	public static checkJWT(req: Request, res: Response, next: NextFunction ) {
    AuthModel.checkJWT(req, res, next)
	}
	public static setHeader(req: Request, res: Response, next: NextFunction ) {
    AuthModel.setHeader(req, res, next)
	}



}

export default AuthController;