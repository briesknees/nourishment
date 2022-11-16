import { Request, Response, NextFunction } from 'express';
import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/create', AuthController.checkUser, AuthController.createUser, AuthController.setJWT, AuthController.setHeader, (req: Request, res : Response, next : NextFunction) =>
{ 
  if (res.locals.status === true){
		res.status(200).json(res.locals.username); 
	}
	else{
		res.status(401).json({error: 'username taken'})
	}
});

router.post('/login', AuthController.login, AuthController.setJWT, AuthController.setHeader, (req: Request, res : Response, next : NextFunction) =>
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

router.post('/logout', AuthController.checkJWT, AuthController.logout, (req: Request, res: Response, next: NextFunction) => {
	
	res.status(200).json();
})

//route for testing purposes only
router.post('/test', AuthController.setJWT, AuthController.setHeader, (req: Request, res : Response, next : NextFunction) =>
{ 
		res.status(200).json(res.locals.accessToken); 
});

//route for testing if the verify jwt token works
router.post('/verify', AuthController.checkJWT, (req: Request, res : Response, next : NextFunction) =>
{ 
		res.status(200).json(res.locals.user); 
});
export default router;
