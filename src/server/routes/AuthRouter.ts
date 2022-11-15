import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router();

router.post('auth/create', (req: Request, res : Response, next : NextFunction) =>
{ 
  console.error('AuthRouter.Post: Not Yet Implemented'); 
  res.sendStatus(501); 
});



export default router;