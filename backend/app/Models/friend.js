const db = require("../../database/db")

class Friend {
    check (id) {
        let sql = "SELECT * FROM likes WHERE user_id1 = ? OR user_id2 = ? "
        return db.promise().query(sql, [id, id])
    }
}

module.exports = Friend