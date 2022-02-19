const db = require("../../database/db_connection")

class User {

    findEmail(email) {

        return `SELECT email FROM users WHERE email = '${email}'`
    }

    findUsername(username) {
        return `SELECT username FROM users WHERE username = '${username}'`
    }

    addUser() {
        return "INSERT INTO users SET ?"
    }

    updateUser(id) {
        return `UPDATE users SET ? WHERE id = ${id}` 
    }

    addImage(id) {
        return `INSERT INTO images SET name = ?, user_id = ${id}`
    }

}

module.exports = User