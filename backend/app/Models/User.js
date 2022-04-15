const randomstring = require("randomstring");
const fs = require("fs");
const db = require("../../database/db");

const patterns = {
    name: /^[a-z]{2,10}$/i,
    username: /^[a-z\d]{5,10}$/,
    password: /^[\w@-]{8,14}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    gender: /^[a-z]{4,6}$/i,
    biography: /^[\w]$/
}

class User {
    validateSignUp (userData) {
        let msg = []
        if (!userData.firstName)
            msg.push({"firstName": "Firstname must not be empty"})
        else {
           let reg = patterns.name
           let test = reg.test(userData.firstName)
           if (test == false)
            msg.push({"firstName": "Firsname must contain just alphabet"})
        }
        if (!userData.lastName)
            msg.push({"lastName": "Lastname must not be empty"})
        else {
            let reg = patterns.name
            let test = reg.test(userData.lastName)
            if (test == false)
                msg.push({"lastName": "Lastname must contain just alphabet"})
        }
        if (!userData.username)
            msg.push({"username": "Username must not be empty"})
        else {
            let reg = patterns.username
            let test = reg.test(userData.username)
            if (test == false)
                msg.push({"Username": "username must be alphanumeric and contain 5 - 10 caracters"})
        }
        if (!userData.email)
            msg.push({"email": "Email must not be empty"})
        else {
            let reg = patterns.password
            let test = reg.test(userData.password)
            if (test == false)
                msg.push({"email": "Email must be a valid adress, example: me@mydomain.com"})
        }
        if (!userData.password)
            msg.push({"password":"Password must not be empty"})
        else {
            let reg = patterns.password
            let test = reg.test(userData.password)
            if (test == false)
                msg.push({"password": "Password must alphanumeric (@, _, - are also allowed) and be 8 - 14"})
        }
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

    // getOther(id) {
    //     return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id != ?', id)
    // }

    // getMe(id) {
    //     return db1.promise().query('SELECT * FROM users WHERE verified = 1 AND complete = 1 AND id = ?', id)
    // }

    addUser(userData) {
        let sql = "INSERT INTO users SET ?"
        return db.promise().query(sql, userData)
    }

    updateUser(id, userData) {
        let sql =  "UPDATE users SET ? WHERE id = ?"
        return db.promise().query(sql, [userData, id])
    }

    addImage(id, name) {
        let sql = "INSERT INTO images SET name = ?, user_id = ?"
        return db.promise().query(sql, [name, id])
    }

    addTags(id, name) {
        let sql = "INSERT INTO tags SET name = ?, user_id = ?"
        return db.promise().query(sql, [name, id])
    }

    checkUser(id) {
        let sql =  "SELECT id, complete, verified FROM users WHERE id = ?"
        return db.promise().query(sql, id)
    }

    getTags(id) {
        return db.promise().query('SELECT name FROM tags WHERE user_id = ?', id)
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