import http = require('http')
import url = require('url')
import qs = require('querystring')
import cp = require('child_process')
import path = require('path')
import socket = require("socket.io")
let wait = async (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(0)
    }, time)
  })
}

let startServer = () => {
  let server = http.createServer((req, res) => {
    console.log(url.parse(req.url))
    let query = url.parse(req.url).query
    console.log(query)
    let qs_parse = qs.parse(query)
    let { username, password } = qs_parse
    console.log(qs_parse)
    res.writeHead(200, { 'Content-type': 'application/json;charset=utf-8' })
    res.end(JSON.stringify("ok"))
  })
  server.listen(6050)
  let io = socket(server)
  io.on("connection", (socket) => {
    console.log("connect success")
    socket.send("this is one message")
    socket.emit("add Success",{weiboer_id:123123})
    socket.on("disconnect",() => {
      console.log("closed")
    })
  })
}
startServer()

export { startServer }