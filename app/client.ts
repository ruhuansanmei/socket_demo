import socket_client = require('socket.io-client')
import readlineSync = require('readline-sync')
let socket = socket_client("http://localhost:6050")
socket.on('connect', function(data){
  console.log('connect success')
});
socket.on('event', function(data){
  console.log(data)
});
socket.on('disconnect', function(){
  console.log('closed')
});

let connect = readlineSync.question("connect ? ") 
if (connect  == 'yes') {
  socket.emit("event1",{data:"datat"})
}
socket.on("add Success",(data) => {
  console.log(data)
})

socket.on("message", (data) => {
  console.log(`message is ${data}`)
})


socket.connect()