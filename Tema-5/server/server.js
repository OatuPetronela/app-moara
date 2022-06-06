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
function checkDuplicate(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}


server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
io.on("connection", (socket) => {
    socket.emit("connected")

socket.on("SentAnswer", (answers) => {
    storeAnswers(answers);
    io.emit("ReceiveAnswer", checkDuplicate());
    console.log(answers)
})
socket.emit('sendRespons', checkDuplicate());
});