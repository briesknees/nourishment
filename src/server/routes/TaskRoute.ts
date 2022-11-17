import { Request, Response, NextFunction } from "express";
import express from "express";
import { Task, PlantModel, Status, Frequency } from "../../types/api";

const router = express.Router();

const newTasks: Task[] = [
  {
    id: "demo task",
    taskName: "Drink water",
    plantName: "Henry",
    model: PlantModel.Flower,
    status: Status.Great,
    Frequency: Frequency.Hours12,
    actionCount: 0,
  },
];

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json(newTasks);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  //console.error("TaskRouter.Post: Not Yet Implemented");
  res.status(200).json(newTasks);
});

router.put("/", (req: Request, res: Response, next: NextFunction) => {
  console.error("TaskRouter.Put: Not Yet Implemented");
  res.status(200).json(newTasks);
});

router.delete("/:taskId", (req: Request, res: Response, next: NextFunction) => {
  console.error("TaskRouter.Delete: Not Yet Implemented");
  res.status(200).json(newTasks);
});

export default router;
