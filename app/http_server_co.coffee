http = require "http"
url = require "url"
qs = require "querystring"
socket = require "socket.io"

startServer = () => 
  server = http.createServer (req,res) =>
    console.log url.parse(req.url)
    query = url.parse(req.url).query
    console.log query
    qs_parse = qs.parse query
    console.log qs_parse
    res.writeHead(200, { 'Content-type': 'application/json;charset=utf-8' })
    res.end(JSON.stringify("ok"))

  server.listen(6050)
  io = socket(server)
  io.on "connection", (socket) => 
    console.log "connect socket"
    socket.send "this is one message"
    socket.emit "add Success", {weiboer_id : 123123}
    socket.on "disconnect", () => 
      console.log "closed"
    socket.on "special message", (data) => 
      console.log(data)
      socket.emit "back message",data


  
startServer()