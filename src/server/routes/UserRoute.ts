import { Request, Response, NextFunction } from 'express';
import express from 'express';

const router = express.Router();

router.get('/', (req: Request, res : Response, next : NextFunction) =>
{ 
  console.error('UserRouter.Get: Not Yet Implemented'); 
  return res.sendStatus(501); 
});

export default router;