const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Message = require("../Models/Message")
const message = new Message()

module.exports = {
    store: async (req, res) => {
        const msgData = req.body
        try {
            const [result] = await message.insert(msgData)
            if (result.affectedRows == 1) {
                io.on('connection', socket => {
                    socket.on('chat message', msgData => {
                        io.emit('chat message', msgData.msg);
                    })
                });
                res.json({status: 200})
            }
        } catch(err) {
            console.log(err)
        }
    },

    get: async (req, res) => {
        const id1 = parseInt(req.query.user_id1)
        const id2 = parseInt(req.query.user_id2)
        const id = [id1, id2, id2, id1]
        try {
            [result] = await message.get(id)
            res.json(result)
        } catch (err) {
            console.log(err)
        }
    }
}