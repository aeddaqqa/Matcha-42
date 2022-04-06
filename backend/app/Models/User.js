const randomstring = require("randomstring");
const fs = require("fs");
const db = require("../../database/db");

const patterns = {
    name: /^[a-z]{2,10}$/
}

class User {
    validate(field, regex) {
         let test =  regex.test(field.value)
        // console.log(test)
        return test
    }
    validateSignUp (userData) {
        let msg = []
        if (!userData.firstName)
            msg.push("firstName must not be empty")
        else {
           let reg = patterns.name
           let test = reg.test(userData.firstName)
            msg.push(test)
        }
        if (!userData.lastName)
            msg.push("lastName must not be empty")
        if (!userData.username)
            msg.push("username must not be empty")
        if (!userData.email)
            msg.push("email must not be empty")
        if (!userData.password)
            msg.push("password must not be empty")
        return msg
    }

    findEmail(email) {
        let sql = "SELECT email FROM users WHERE email = ?"
        return db.promise().query(sql, email)
    }

    findUsername(username) {
        let sql = "SELECT username FROM users WHERE username = ?"
        return db.promise().query(sql, username)
    }

    selectUser(id) {
        return db1.promise().query('SELECT * FROM users WHERE id = ?', id)
    }

    getOther(id) {
        return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id != ?', id)
    }

    getMe(id) {
        return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id = ?', id)
    }

    addUser(userData) {
        let sql = "INSERT INTO users SET ?"
        return db.promise().query(sql, userData)
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

    getTags(id) {
        return db1.promise().query('SELECT name FROM tags WHERE user_id = ?', id)
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