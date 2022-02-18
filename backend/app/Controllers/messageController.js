const db = require("../../database/db_connection")
const Message = require("../Models/Message")


module.exports = {
    MessageStore: (req, res) => {
        const messageData = req.body
        const message = new Message(messageData)

        db.query(message.insert(), (err, result) => {
			if (err)
				res.json(err)
            res.json(messageData)
        })
    },

    getMessage: (req, res) => {
        const messageData = req.body
        const message = new Message(messageData)

        db.query(message.get(), (err, result) => {
            if (err)
				res.json(err)
            res.json(result)
        })
    }
}