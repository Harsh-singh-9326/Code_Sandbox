import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"
configDotenv()
const app = express()
app.use(express.json())
const port = process.env.PORT || 3001

app.get("/",(req,res)=>{
    res.json({
        message : "welcome home buddy"
    })
})

app.listen(port,()=>{
    console.log(`the server is listening to ${port}`)

})