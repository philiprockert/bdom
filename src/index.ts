
import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = "3001";
app.get("/", (req: Request, res: Response)=> {
    res.send('Hello typescript');
})

app.listen(port, () =>{console.log('app listening ' + port)});