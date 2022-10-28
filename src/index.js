import http from "http"

const server = http.createServer((req,res) => {
    res.write("Hello")
    res.end()
})

server.listen(4000)