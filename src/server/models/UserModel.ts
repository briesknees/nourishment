import { Request, Response, NextFunction } from 'express';
import { db } from './DatabaseModel'

class UserModel {
  public static async getUserData(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.locals.userData = await db.query(
      `SELECT * FROM users WHERE username='${req.params.username}'`
    );
  }
}

export default UserModel;
