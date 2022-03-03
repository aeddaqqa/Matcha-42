const connection = require("../../database/db_connection")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const db = require("../../database/db_connection")

module.exports = {
    Login: ( req, res ) => {
        const { username, password } = req.body

        connection.query(`SELECT * FROM users WHERE username = '${username}'`, (err,result) => {
            if(err)
                res.json(err)
            else
            {
                if (result.length == 0)
                    res.status(400).json({ErrorMessage: "Wrong Email !!!"})
                else
                {
                userPassword = result[0].password

                bcrypt.compare(password, userPassword, (err, result1) => {
                    if(err)
                        res.status(401).send("Wrong password")
                    else
                    {
                        dataUser = [
                            {
                                "Id" : result[0].id,
                                "Email" : result[0].email
                            }
                        ]
                        jwt.sign({ dataUser }, 'hello', (err, token) => {
                            res.json({token})
                        })
                    }
                })
                
                }
            }
        })
    },

    verifyEmail: (req, res) => {
        const token = req.body.token
        sql = `SELECT verified FROM users WHERE token = '${token}'`
        db.query(sql, (err, result) => {
            if (err)
                return res.send(err)
            if(result.length == 0)
                return res.json("Invalid token")
            if (result[0].verified == 1)
                return res.json("The email has already verified")
            let token = null
            sql = `UPDATE users SET verified = 1 , token = ${token}`
            db.query(sql, (err, result) => {
                if(err)
                    return res.send(err)
                res.json("your profil had been verified")
            })
        })
    },

    forgotPassword: (req, res) => {
        email = req.body.email
        sql = `SELECT email from users WHERE email = '${email}'`
        db.query(sql, (err, result) => {
            if (err)
                return res.send(err)
            if (result.length == 0)
                return res.json("Email doesn't exist")
            
        })
    }
}