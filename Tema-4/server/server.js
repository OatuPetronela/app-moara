const express = require('express')
const app = express()
const http = require('http');
const { Server }= require('socket.io')

const port = 3000;
const server =  http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

io.on("connection", (socket) => {
  socket.emit("connected")

  socket.on("newMessage", ({message, name}) => {
    socket.broadcast.emit("notification", `${name} has sent you a message`)
    io.emit('received-message', `${name}: ${message}`);
  });
});