const express = require('express')
const app = express()
const http = require('http');
const {Server} = require('socket.io')

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname)); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const Colors = [
    ['#FFA500', '#800000','#808000'],
    ['#008000', "#00FF00", "#FFC0CB"],
    ['#00FFFF', "#00008B", "#FFFF00"]
]
const serverMatrix = [["","",""],["","",""],["","",""]];
const serverColorPalette = [
    ['#A52A2A', '#FF0000','#43C6DB'],
    ['#228B22', "#FF00FF", "#CCFFFF"],
    ['#800080', "#E2F516", "#191970	"]
]

io.on("connection", (socket) => {
socket.emit("data", {serverMatrix, serverColorPalette})

socket.on("feedback", ({value, selected})=>
{
    serverMatrix[selected[0]][selected[1]] = value;
    serverColorPalette[selected[0]][selected[1]] = Colors[Math.floor(Math.random() * Colors.length)][Math.floor(Math.random() * Colors[0].length)];
    io.emit("data", {serverMatrix, serverColorPalette})
})

    socket.on("disconnect", () => {
        console.log("user disconnected" + socket.id)
    })
});