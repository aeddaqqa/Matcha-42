const Message = require("../Models/Message")
const message = new Message()

module.exports = {
    store: async (req, res) => {
        const msgData = req.body
        try {
            const [result] = await message.insert(msgData)
            if (result.affectedRows == 1)
                res.json({status: 200})
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