const { Result } = require("antd")
const db = require("../../database/db_connection")

module.exports = {

    store: (req, res) => {
        likeData = {
            user_id1: req.body.user_id1,
            user_id2: req.body.user_id2
        }

        db.query('INSERT INTO likes SET ?', likeData, (err, result) => {
            if (err)
                throw err
            else 
                return res.status(200).send(result)
        })
    }

}