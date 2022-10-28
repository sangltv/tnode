import http from "http"
import express from "express"
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)


app.get("/", (req,res)=>{
    res.send("HEllo")
})

app.get("/posts", (_, res)=>{
    res.send({post:"hello"})
})

server.listen(PORT, ()=>{

})