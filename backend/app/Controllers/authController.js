const connection = require("../../database/db_connection")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

module.exports = {
    Login: ( req, res ) => {
        const { username, password } = req.body

        connection.query(`SELECT * FROM users WHERE username = '${username}'`, (err,result) => {
            if(err)
                res.json(err)
            else
            {
                if (result.length == 0)
                    res.status(400).json({ErrorMessage: "Wrong username !!!"})
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
    }
}