import express,{Application,Request,Response} from 'express';
import dotenv from "dotenv";

const app: Application = express();
dotenv.config();

const PORT = process.env.PORT;
console.log(PORT)
app.get('/',(req: Request,res: Response) => {
    res.end("hello node Typescript");
})

app.listen(PORT,()=>console.log(`app is runnng at 'http://localhost:${PORT}'`));
