import exp from 'constants';
import express from 'express'
import cookieParser from 'cookie-parser';
import authRouter from './routes/AuthRoute'
import taskRouter from './routes/TaskRoute'
import userRouter from './routes/UserRoute'
import cors from "cors";


import { CreateTable, SelectRecords } from "./models/DatabaseModel";

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/", (req: express.Request, res: express.Response) => {
  res.statusCode = 200;
  return res.json({ title: "Coding in Progress" });
});

console.log(process.env.AZURE_PSQL_PORT);

console.log(
  SelectRecords({
    table: "users",
    attributes: [{
      value: "*",
      type: "email",
      },
    ],
    
  })
);

export default app;
