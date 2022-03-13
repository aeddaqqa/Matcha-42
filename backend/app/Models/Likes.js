const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'matcha'
})


class Like {
    store(likeData) {
        return db.promise().query('INSERT INTO likes SET ?', likeData)
    }

    check(likeData) {
        const data = Object.values(likeData)
        return db.promise().query(`SELECT user_id2 FROM likes WHERE user_id1 = ? and user_id2 = ?`, data)
    }

    get1(userId) {
        const sql = 'SELECT users.* FROM users JOIN likes ON users.id = likes.user_id2 WHERE user_id1 = ?'
        return db.promise().query(sql, userId)
    }

    get2(userId) {
        const sql = 'SELECT users.* FROM users JOIN likes ON users.id = likes.user_id1 WHERE user_id2 = ?'
        return db.promise().query(sql, userId)
    }

    delete(userId) {
        const sql = 'DELETE FROM likes WHERE user_id2 = ?'
        return db.promise().query(sql, userId)
    }

}

module.exports = Like