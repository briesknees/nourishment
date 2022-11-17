import { Request, Response, NextFunction } from "express";
import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();

router.get(
  "/",
  UserController.getUserData,
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(res.locals.userData);
  }
);

export default router;
