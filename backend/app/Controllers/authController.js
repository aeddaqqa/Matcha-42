const connection = require("../../database/db_connection")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const randomstring = require("randomstring")
const nodemailer = require("nodemailer");
const db = require("../../database/db_connection")
const crypto = require("crypto")

module.exports = {
    login: ( req, res ) => {
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
                        return res.send(err)
                    if (result1 == false)
                        return res.send({Status: "Failed", Msg: "Wrong password."})
                    else
                    {
                        data = {
                                "id" : result[0].id,
                                "email" : result[0].email,
                                "verified": result[0].verified
                            }
                        jwt.sign({ data }, 'hello', (err, token) => {
                            res.json({
                                token,
                                "verified": result[0].verified,
                                "verified": result[0].verified,
                                "complete": result[0].complete
                            })
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
                res.status(200).json("your profil had been verified")
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

            sql = `SELECT email from password_resets WHERE email = '${email}'`
            db.query(sql, (err, result) => {
                if (err)
                    return res.send(err)
                if (result.length > 0)
                sql = `DELETE from password_resets WHERE email = '${email}'`
                db.query(sql, err => {
                    if(err)
                        return res.send(err)
                })
            })
            const token = randomstring.generate(20)
            const url = "http://localhost:3001/resetpassword/" + token
            const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
                auth: {
                    user: "ouseqqam.test@gmail.com",
                    pass: "Outest@2022"
                }
            });

            message = {
                from: "Matcha Team <ouseqqam.test@gmail.com>",
                to: email,
                subject: "Matcha reset password",
                html: "<p>Click here to reset your account password <a href=" + url + ">Verify</a></p>"
            }
                
            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log(err)
                } else {
                    const sql = `INSERT INTO password_resets SET email = '${email}', token = '${token}'` 
                    db.query(sql, (err, result) => {
                        if (err)
                            return res.send(err)
                        return res.json("Email verification has been send to your email")
                    })
                }
            })
        })
    },

    resetPassword: (req, res) => {
        const token = req.body.token
        const password = req.body.password
        const salt = 10
        let  sql = `SELECT email FROM password_resets WHERE token = '${token}'`
        db.query(sql, (err, result) => {
            if (err)
                console.log(err)
            if (result.length == 0)
                return res.json({status: "Failed", Msg: "Invalid token"})
            const email = result[0].email
            bcrypt.hash(password, salt, (err, hash) => {
                if (err)
                    throw err
                data = {
                    password: hash
                }
                sql = `Update users SET ? WHERE email = '${email}'`
                db.query(sql, data, (err, result) => {
                    if (err)
                        throw err
                    return res.send(result)
                })
            })
        }) 
    }
}