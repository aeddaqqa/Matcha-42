const db = require("../../database/db_connection")
const User = require("../Models/User")
const bcrypt = require("bcrypt")
const randomstring = require("randomstring");


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
                    else {
                        db.query(user.addUser(),userData, (err, result) => {
                            if (err)
                                return res.send(err.sqlMessage)
                            res.json("user is registered with success")
                        })
                    }
                })
            }
        })
    },

    UserEdit:  (req, res) => {
        const user = new User()
        const userData = req.body

        for (const key in userData)
            if (userData[key] == "")
              delete userData[key]

        const data = Object.values(userData)
        const set = user.updateUser(req.params.id)
        
        if (req.files) {
            const imgs = req.files.img
            imgs.forEach(img => {
                let time = Date.now()
                let extension = img.name.split('.').pop();
                let name = randomstring.generate(8) + "_" + time + "." + extension
                let path = __dirname + "/images/" + name
                img.mv(path, err => {
                    if (err)
                        return res.status(500).send(err)
                    db.query(user.addImage(req.params.id), [name], (err, result) => {
                        if (err)
                            return res.status(500).send(err)
                    })
                })
            })
        }

        db.query(set, userData, (err, result) => {
            if (err)
                return res.status(500).send(err)
            else
                res.json(result)
        })
    },
    
    UserSelect: (req, res) => {
    }
}
