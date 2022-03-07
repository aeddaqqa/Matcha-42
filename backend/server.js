
const express = require('express')
const app = express()
const user = require('./routes/routes')
const bodyParser = require('body-parser')
const verifyToken = require('./app/middlewares/verifyToken')


port = process.env.PORT || 3000


const fs = require('fs');
const dir = './backend/public/images';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, {
        recursive: true
    })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.use('/api', user)


app.post('/api/post', verifyToken.verifyToken, (req, res) => {
    res.send(req.authUser.dataUser)
})

app.listen(port, () => {
    console.log('API server started on: ' + port)
});