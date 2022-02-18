const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)


const port = process.env.PORT || 3000


app.set('views', 'Views')
app.use(express.static('Views'))



app.get('/', (req, res) => {
    res.render('./index.html')
})


io.on('connection', socket => {
    socket.on('message', data => {
      //  socket.emit('message', data)
    //   io.sockets.emit('message', data)
       socket.broadcast.emit('message', data)
    })
 })


server.listen(port, () => {
    console.log('API server started on: ' + port)
});