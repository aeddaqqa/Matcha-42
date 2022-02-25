const db = require("../../database/db_connection")
const User = require("../Models/User")
const bcrypt = require("bcrypt")
const randomstring = require("randomstring");
const fs = require("fs")


module.exports = {
    UserStore: (req, res) => {
        const userData = req.body
        const user = new User()
        
        db.query(user.findEmail(userData.email), (err, result) => {
            if (err)
                return res.send(err.sqlMessage)
            else
            {
                let count = Object.keys(result).length
                let i = 0 
                if (count != 0)
                    i = 2
                db.query(user.findUsername(userData.username), (err, result) => {
                    if (err)
                        return res.send(err.sqlMessage)
                    let count = Object.keys(result).length
                    if (count != 0)
                        i++
                    if (i != 0)
                    {
                        if (i == 1)
                            res.status(400).json("Username was exist")
                        else if (i == 2)
                            res.status(400).json("Email was exist")
                        else if (i == 3)
                            res.status(400).json("Email and username were exist")
                    }
                    else
                        db.query(user.addUser(),userData, (err, result) => {
                            if (err)
                                return res.send(err.sqlMessage)
                            res.json("user is registered with success")
                        })
                })
            }
        })
    },

    CompelteProfile:  (req, res) => {
        const user = new User()
        const userData = req.body
        msg = []
        for (const key in userData)
            if (userData[key] == "")
                msg.push(`${key} must not be empty`)
                
        if (msg.length > 0)
            return res.send({Status: "Failed", Msg: msg})

        let imgs = userData.img
        for(let i = 0; i < imgs.length; i++) {
            const name = randomstring.generate() + "_" + Date.now()
            const extension = imgs[i].split(';')[0].split('/')[1]
            let img = imgs[i].split(';base64,')[1];
            fs.writeFile(`images/${name}.${extension}`, img, {encoding: 'base64'}, err => {
                if (err)
                    return res.status(500).send(err)
            });
            imgs[i] = `${name}.${extension}`
        }

        delete userData.img
        const set = user.updateUser(req.params.id)

        db.query(user.checkUser(req.params.id), (err, result) => {
            if (err)
                return res.status(500).send(err)
            else
                if (result.length == 1)
                    db.query(set, userData, (err, result) => {
                        if (err)
                            return res.status(500).send(err)
                        else
                            for (let i = 0; i < imgs.length; i++) {
                                db.query(user.addImage(req.params.id), imgs[i], (err, result) => {
                                    if (err)
                                        return res.status(500).send(err)
                                })
                            return res.json({Status: "Success", Msg: "User profile has been completed."})
                        }
                    })
                else
                    return res.json({Status: "Failed", Msg:"User isn't exist."})
        })
    },
    
    UserSelect: (req, res) => {
        /*    for (const key in userData)
            if (userData[key] == "")
              delete userData[key]*/
    }
}
