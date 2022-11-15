import express from 'express'
const cors = require('cors');

import authRouter from './routes/AuthRouter'
import taskRouter from './routes/TaskRouter'
import userRouter from './routes/UserRouter'

const app = express();
const PORT = 8080;

app.use('/api/tasks', taskRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/api/', (req: express.Request, res: express.Response) => {
    res.statusCode = 200;
    return res.json({title: 'Coding in Progress'});
})

app.listen(PORT, () => {
    console.log("Server is listening on Port " + PORT + "...")
})

module.exports = app;