const db = require("../../database/db");

class Message {

    insert(msgData) {
        let sql = "Insert INTO messages SET ?"
        return db.promise().query(sql, msgData)
    }

    get(id) {
        let sql = "SELECT FROM messages WHERE (user_id1 = ? and user_id2 = ?) OR (user_id1 = ? and user_id2 = ?)"
        return db.promise().query(sql, id)
    }
}

module.exports = Message