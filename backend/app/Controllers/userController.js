const db = require("../../database/db_connection")
const User = require("../Models/User")
const bcrypt = require("bcrypt")



module.exports = {
    UserStore: (req, res) => {
        const userData = req.body
        const user = new User()
        
        db.query(user.findEmail(userData.email), (err, result) => {
            if (err)
                throw err
            else
            {
                let count = Object.keys(result).length
                let i = 0 
                if (count != 0)
                    i = 2
                db.query(user.findUsername(userData.username), (err, result) => {
                    if (err)
                        console.log(err)
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
                                res.send(err)
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
        const data = Object.values(userData)
        const set = user.updateUser(req.params.id)
        db.query(set, userData, (err, result) => {
            if (err)
                throw err
            else
                res.json("User data updated with success")
        })
    },
    
    UserSelect: async (req, res) => {
    }
}
