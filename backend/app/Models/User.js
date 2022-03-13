const randomstring = require("randomstring");
const fs = require("fs")

const mysql = require('mysql2');

const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'matcha'
})

class User {

    findEmail(email) {
        return `SELECT email FROM users WHERE email = '${email}'`
    }

    findUsername(username) {
        return `SELECT username FROM users WHERE username = '${username}'`
    }

    getOther(id) {
        return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id != ?', id)
    }

    getMe(id) {
        return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id = ?', id)
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

    addTags(id) {
        return `INSERT INTO tags SET name = ?, user_id = ${id}`
    }

    checkUser(id) {
        return `SELECT id, complete FROM users WHERE id = ${id}`
    }

    putImgToFolder(imgs) {
        for(let i = 0; i < imgs.length; i++) {
            const name = randomstring.generate() + "_" + Date.now()
            const extension = imgs[i].split(';')[0].split('/')[1]
            let img = imgs[i].split(';base64,')[1];
            fs.writeFile(`backend/public/images/${name}.${extension}`, img, {encoding: 'base64'}, err => {
                if (err)
                    console.log(err)
            });
            imgs[i] = `${name}.${extension}`
        }
    }
}

module.exports = User