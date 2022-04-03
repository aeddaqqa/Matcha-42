const db = require("../../database/db")

class Friend {
    check (id) {
         const sql = '(SELECT users.id FROM users JOIN likes ON users.id = likes.user_id2 WHERE likes.user_id1 = ?)'
         const sql2 = 'SELECT * FROM users JOIN likes ON users.id = likes.user_id1 WHERE likes.user_id2 = ? AND users.id'
        const sql4 = sql2 + " IN " + sql
        // const sql3 = sql2 + " INTERSECT " + sql
        return db.promise().query(sql4, [id, id])
    }
}

module.exports = Friend