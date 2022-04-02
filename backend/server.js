
const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const user = require('./routes/routes')
const bodyParser = require('body-parser')
const verifyToken = require('./app/middlewares/verifyToken')
const fs = require('fs')

const port = process.env.PORT || 3000


const dir = './backend/public/images'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, {
        recursive: true
    })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/api', user)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

// app.post('/api/post', verifyToken.verifyToken, (req, res) => {
//     res.send(req.authUser.dataUser)
// })

server.listen(port, () => {
    console.log('API server started on: ' + port)
})