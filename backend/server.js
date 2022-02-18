
const express = require('express')
const app = express()
const user = require('./routes/routes')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const connection = require('./database/db_connection')
const bcrypt = require("bcrypt");
const verifyToken = require('./app/middlewares/verifyToken')
const fileUpload = require("express-fileupload");
const randomstring = require("randomstring");

//const path = require("path");

port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


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

app.use(
    fileUpload({
        createParentPath: true,
    })
  );

app.post('/upload', function(req, res) {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }
    const imgs = req.files.img
    imgs.forEach(img => {
        let time = Date.now()
        let extension = img.name.split('.').pop();
        let name = randomstring.generate() + "_" + time + "." + extension
        console.log(name)
        let path = __dirname + "/images/" + name
        img.mv(path, err => {
            if (err)
                res.status(500).send(err)
        })
    })
    res.send(true) 
})

app.listen(port, () => {
    console.log('API server started on: ' + port)
});