import express from "express"
import connectDB from "./DB/connection.js"
import authRouter from "./modules/auth/auth.controller.js"

const app = express()


  const bootstrap = async (app , express) =>{


app.use(express.json())
await connectDB()

 app.use("/auth" , authRouter)


const port = 3000

app.listen((port) ,  ()=>{
    console.log("Server is Running on Port " , port);
    
})


}


export default bootstrap