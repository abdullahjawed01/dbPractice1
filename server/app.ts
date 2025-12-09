import express from "express"
import type {Request,Response} from "express"
import dotenv from "dotenv"
dotenv.config()
const PORT : Number | unknown= process.env.PORT 
const app = express()
app.use(express.json())

app.get("/",(req:Request,res:Response):void=>{
    try {
        res.status(200).json({msg:"hello world"})
    } catch (error:any) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.post("/user",(req:Request,res:Response):void=>{
    try {
        let body = req.body
        res.status(200).json({msg:"hello world",body:body})
    } catch (error:any) {
        console.log(error);
        res.status(500).json(error)
    }
})

app.listen(PORT,()=>{
    console.log(`The server is live on https://localhost${PORT}`);
})