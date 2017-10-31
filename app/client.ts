import socket_client = require('socket.io-client')
import readlineSync = require('readline-sync')
let socket = socket_client("http://localhost:6050")

socket.on('connect', function (data) {
  console.log('connect success')
});
socket.on('event', function (data) {
  console.log(data)
});
socket.on('disconnect', function () {
  console.log('closed')
});
socket.on("add Success", (data) => {
  console.log(data)
})

socket.on("message", (data) => {
  console.log(`message is ${data}`)
})

let message = readlineSync.question("message ? ")
socket.emit("special message", message)
socket.on("back message", (data) => {
  console.log("back message")
  console.log(data)
})
