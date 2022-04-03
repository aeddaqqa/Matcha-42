const Like = require("../Models/Likes")
const like = new Like()

module.exports = {
    store: async (req, res) => {
        try {
            const likeData = req.body
            const [result] = await like.check(likeData)
            if (result.length > 0)
                res.json("You are already sent a like to this account")
            else {
               const [result2] = await like.store(likeData)
                if (result2.affectedRows == 1)
                    res.json("you send a like")
            }
        } catch(err) {
            console.log(err)
        }
    },

    get1: (req, res) => {
        userId = req.params.id
        like.get1(userId).then(([rows]) => {
            res.json(rows)
        }).catch(console.log)
    },

    get2: (req, res) => {
        userId = req.params.id
        like.get2(userId).then(([rows]) => {
            res.json(rows)
        }).catch(console.log)
    },

    delete: (req, res) => {
        const likeData = req.params

        like.check(likeData).then(([rows]) => {
            if (rows.length == 0)
                res.json("Like doesn't exist")
            else {
               like.delete(likeData.user_id2).then(([rows]) => {
                    if (rows.affectedRows == 1)
                        res.json("like had been deleted")
                }).catch(console.log)
            }
        }).catch(console.log)
    }


}