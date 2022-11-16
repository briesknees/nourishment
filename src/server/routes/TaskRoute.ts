import { Request, Response, NextFunction } from "express";
import express from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  console.error("TaskRouter.Post: Not Yet Implemented");
  res.sendStatus(501);
});

router.put("/", (req: Request, res: Response, next: NextFunction) => {
  console.error("TaskRouter.Put: Not Yet Implemented");
  res.sendStatus(501);
});

router.delete("/:taskId", (req: Request, res: Response, next: NextFunction) => {
  console.error("TaskRouter.Delete: Not Yet Implemented");
  res.sendStatus(501);
});

export default router;
