const randomstring = require("randomstring");
const fs = require("fs")

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
            fs.writeFile(`public/images/${name}.${extension}`, img, {encoding: 'base64'}, err => {
                if (err)
                    return err
            });
            imgs[i] = `${name}.${extension}`
        }
    }
}

module.exports = User