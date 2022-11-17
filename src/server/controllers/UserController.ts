import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/UserModel";

class UserController {

  public static getUserData(req: Request, res: Response, next: NextFunction) {
    UserModel.getUserData(req, res, next);
  }
}

export default UserController;
