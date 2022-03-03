const express = require('express')
const router = express.Router()
const UserController = require('../app/Controllers/userController')
const authController = require('../app/Controllers/authController')
const messageController = require('../app/Controllers/messageController')

router.post('/signup', UserController.UserStore)
router.post('/login', authController.Login)
router.post('/message', messageController.MessageStore)
router.post('/message/show', messageController.getMessage)
router.post('/user/complete/:id', UserController.CompelteProfile)
router.get('/user/tags/:search', UserController.getTags)
router.get('/user/:id', UserController.UserSelect)


 module.exports = router