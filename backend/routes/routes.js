const express = require('express')
const router = express.Router()
const userController = require('../app/Controllers/userController')
const authController = require('../app/Controllers/authController')
const likesController = require('../app/Controllers/likesController')

router.post('/signup', userController.signup)
router.post('/login', authController.login)
router.post('/user/verifyEmail', authController.verifyEmail)
router.post('/forgotpassword', authController.forgotPassword)
router.get('/resetpassword', authController.resetPassword)
router.post('/user/complete/:id', userController.complete)
router.get('/user/tags/:search', userController.getTags)
router.get('/user/:id', userController.UserSelect)
router.post('/user/like', likesController.store)


module.exports = router