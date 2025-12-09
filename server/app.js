import express from "express"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
import router from "./controllers/user/index.js"

// import control from "./utils/dbConnect.js"

// control()
import "./utils/dbConnect.js"
app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello world"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.post("/user",(req,res)=>{
    try {
        let body = req.body
        res.status(200).json({msg:"hello world",body:body})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


app.use("/users",router)

app.listen(PORT,()=>{
    console.log(`The server is live on http://localhost${PORT}`);
})