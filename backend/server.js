
const express = require('express')
const app = express()
const user = require('./routes/routes')
const bodyParser = require('body-parser')
const verifyToken = require('./app/middlewares/verifyToken')
const fileUpload = require("express-fileupload");

//const path = require("path");

port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({ createParentPath: true }))

app.use('/api', user)


app.post('/api/post', verifyToken.verifyToken, (req, res) => {
    res.send(req.authUser.dataUser)
})

app.listen(port, () => {
    console.log('API server started on: ' + port)
});