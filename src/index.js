import http from "http"
import express from "express"
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

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