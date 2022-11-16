import express from 'express'
const cors = require('cors');

import authRouter from './routes/AuthRoute'
import taskRouter from './routes/TaskRoute'
import userRouter from './routes/UserRoute'

const app = express();

app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/api/', (req: express.Request, res: express.Response) => {
    res.statusCode = 200;
    return res.json({title: 'Coding in Progress'});
})

export default app;