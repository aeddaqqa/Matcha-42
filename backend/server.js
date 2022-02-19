
const express = require('express')
const app = express()
const user = require('./routes/routes')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const connection = require('./database/db_connection')
const bcrypt = require("bcrypt");
const verifyToken = require('./app/middlewares/verifyToken')
const fileUpload = require("express-fileupload");

//const path = require("path");

port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({ createParentPath: true }))

app.use('/api', user)


/*app.post('/api/post', verifyToken.verifyToken, (req, res) => {
    jwt.verify(req.token, 'hello', (err, authData) => {
        if (err)
            res.sendStatus(403)
        else{
            res.json({
                message: "test",
                authData
            })
        }
    })
})*/

app.listen(port, () => {
    console.log('API server started on: ' + port)
});