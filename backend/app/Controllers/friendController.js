const Friend = require('../Models/friend')
const friend = new Friend()

module.exports = {
    get: async (req, res) => {
        try {
            const id = parseInt(req.params.id)
            const [result] = await friend.check(id)
            res.json(result)
        } catch (err){
            console.log(err)
        }
    }
}