import { Request, Response, NextFunction } from 'express';
import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/create', AuthController.checkUser, AuthController.createUser, AuthController.setJWT, /*maybe setcookies here*/ (req: Request, res : Response, next : NextFunction) =>
{ 
  if (res.locals.status === true){
		res.status(200).json(res.locals.username); 
	}
	else{
		res.status(401).json({error: 'username taken'})
	}
});

router.post('/login', AuthController.login, AuthController.setJWT, /*maybe setcookies here */ (req: Request, res : Response, next : NextFunction) =>
{ 
	if (res.locals.status === true){
		res.status(200).json(); 
	}
	else{
		res.status(401).json({error: 'invalid username or password'})
	} 
});

router.delete('/delete', AuthController.checkJWT, AuthController.deleteUser, (req: Request, res : Response, next : NextFunction) =>
{ 
		res.status(200).json(); 
});


export default router;
