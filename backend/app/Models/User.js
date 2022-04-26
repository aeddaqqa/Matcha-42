const randomstring = require("randomstring");
const fs = require("fs");
const db = require("../../database/db");
const sizeOf = require('image-size');
const { compareSync } = require("bcrypt");


const patterns = {
    name: /^[a-z]{2,10}$/i,
    username: /^[a-z\d]{5,10}$/,
    password: /^[\w@-]{8,14}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    biography: /^[\w\s,\.]{2,100}$/,
    birthdate: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d\d$/,
    float: /^[+-]?([0-9]*[.])?[0-9]+$/,
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
            let reg = patterns.email
            let test = reg.test(userData.email)
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

    validateCompeteProfil (userData, imgs, tags) {
        let msg = []
        if (!userData.gender)
            msg.push({"gender": "gender must not be empty"})
        else {
           let reg = patterns.name
           let test = reg.test(userData.gender)
           if (test == false)
            msg.push({"gender": " must contain just alphabet"})
        }
        if (!userData.sexualPreference)
            msg.push({"sexualPreference": "sexualPreference must not be empty"})
        else {
            let reg = patterns.name
            let test = reg.test(userData.sexualPreference)
            if (test == false)
                msg.push({"sexualPreference": "sexualPreference must contain just alphabet"})
        }
        if (!userData.biography)
            msg.push({"biography": "biography must not be empty"})
        else {
            let reg = patterns.biography
            let test = reg.test(userData.biography)
            if (test == false)
                msg.push({"biography": "biography must be alphanumeric"})
        }
        if (!userData.birthdate)
            msg.push({"birthdate": "birthdate must not be empty"})
        else {
            let reg = patterns.birthdate
            let test = reg.test(userData.birthdate)
            if (test == false)
                msg.push({"birthdate": "birthdate must be a valid date, example: 11/05/2000"})
        }
        if (!userData.locationLat)
            msg.push({"locationLat":"locationLat must not be empty"})
        else {
            let reg = patterns.float
            let test = reg.test(userData.locationLat)
            if (test == false)
                msg.push({"locationLat": "locationLat must be numeric, example: 32.88108"})
        }
        if (!userData.locationLng)
            msg.push({"locationLng":"locationLng must not be empty"})
        else {
            let reg = patterns.float
            let test = reg.test(userData.locationLng)
            if (test == false)
                msg.push({"locationLng": "locationLng must be numeric, example: -6.9063"})
        }
        if (!userData.rating)
            msg.push({"rating":"rating must not be empty"})
        else {
            let reg = patterns.float
            let test = reg.test(userData.rating)
            if (test == false)
                msg.push({"rating": "rating must be numeric, example: 3"})
        }
        // if (!imgs.length)
        //     msg.push({"Gallery":"Gallery must not be empty"})
        // else {
        //     let msgs = []
        //     for(let i = 0; i < imgs.length; i++) {
        //         let img = Buffer.from(imgs[i].substr(23), 'base64')
        //         try{
        //             let dimension = sizeOf(img)
        //         } catch(err) {
        //             let key = "Picture number " + i
        //             msgs.push(`Picture number ${i + 1} is not valid`)
        //         }
        //     }
        //     if (msgs.length)
        //         msg.push({"Gallery": msgs})
        // }
        if (!tags)
            msg.push({"listOfInterests": "listOfInterests must not be empty"})
        else {
            let msgs = []
            for(let i = 0; i < tags.length; i++) {
                let reg = patterns.name
                let test = reg.test(tags[i])
                if (test == false)
                    msgs.push(`Tag number ${i + 1} must be an aphabet string`)
            }
            if (msgs.length)
                msg.push({"listOfInterests": msgs})
        }
        return msg
    }
    
    validateUpdateProfil (userData, imgs, tags) {
        let msg = []
        if (userData.firstName) {
           let reg = patterns.name
           let test = reg.test(userData.firstName)
           if (test == false)
            msg.push({"firstName": "Firsname must contain just alphabet"})
        }
        if (userData.lastName) {
            let reg = patterns.name
            let test = reg.test(userData.lastName)
            if (test == false)
                msg.push({"lastName": "Lastname must contain just alphabet"})
        }
        if (userData.username) {
            let reg = patterns.username
            let test = reg.test(userData.username)
            if (test == false)
                msg.push({"Username": "username must be alphanumeric and contain 5 - 10 caracters"})
        }
        if (userData.email) {
            let reg = patterns.email
            let test = reg.test(userData.email)
            if (test == false)
                msg.push({"email": "Email must be a valid adress, example: me@mydomain.com"})
        }
        if (userData.gender) {
           let reg = patterns.name
           let test = reg.test(userData.gender)
           if (test == false)
            msg.push({"gender": " must contain just alphabet"})
        }
        if (userData.sexualPreference) {
            let reg = patterns.name
            let test = reg.test(userData.sexualPreference)
            if (test == false)
                msg.push({"sexualPreference": "sexualPreference must contain just alphabet"})
        }
        if (userData.biography) {
            let reg = patterns.biography
            let test = reg.test(userData.biography)
            if (test == false)
                msg.push({"biography": "biography must be alphanumeric"})
        }
        if (userData.birthdate) {
            let reg = patterns.birthdate
            let test = reg.test(userData.birthdate)
            if (test == false)
                msg.push({"birthdate": "birthdate must be a valid date, example: 11/05/2000"})
        }
        if (userData.locationLat) {
            let reg = patterns.float
            let test = reg.test(userData.locationLat)
            if (test == false)
                msg.push({"locationLat": "locationLat must be numeric, example: 32.88108"})
        }
        if (userData.locationLng) {
            let reg = patterns.float
            let test = reg.test(userData.locationLng)
            if (test == false)
                msg.push({"locationLng": "locationLng must be numeric, example: -6.9063"})
        }
        if (userData.rating) {
            let reg = patterns.float
            let test = reg.test(userData.rating)
            if (test == false)
                msg.push({"rating": "rating must be numeric, example: 3"})
        }
        if (imgs) {
            let msgs = []
            for (let i = 0; i < imgs.length; i++) {
                let img = Buffer.from(imgs[i].substr(23), 'base64')
                try {
                    let dimension = sizeOf(img)
                } catch(err) {
                    msgs.push(`Picture number ${i + 1} is not valid`)
                }
            }
            if (msgs.length)
                msg.push({"Gallery": msgs})
        }
        if (tags) {
            let msgs = []
            for(let i = 0; i < tags.length; i++) {
                let reg = patterns.name
                let test = reg.test(tags[i])
                if (test == false)
                    msgs.push(`Tag number ${i + 1} must be an aphabet string`)
            }
            if (msgs.length)
                msg.push({"listOfInterests": msgs})
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

    updateImage(id, name) {
        let sql = "UPDATE images SET name = ?, user_id = ?"
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
            let img = imgs[i].split(';base64,')[1]
            fs.writeFile(`backend/public/images/${name}.${extension}`, img, {encoding: 'base64'}, err => {
                if (err)
                    console.log(err)
            });
            imgs[i] = `${name}.${extension}`
        }
    }
}

module.exports = User