const cors = require('cors');
import express from 'express'

const app = express();

const PORT = 8080;

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.statusCode = 200;
    return res.json({title: 'Coding in Progress'});
})

app.listen(PORT, () => {
    console.log("Server is listening on Port " + PORT + "...")
})

module.exports = app;