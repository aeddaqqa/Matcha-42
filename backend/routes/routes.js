const express = require('express')
const router = express.Router()
const userController = require('../app/Controllers/userController')
const authController = require('../app/Controllers/authController')
const likesController = require('../app/Controllers/likesController')
const browseController = require('../app/Controllers/browseController')
const messageController = require('../app/Controllers/messageController')
const friendController = require('../app/Controllers/friendController')


/* -------------------- Sign up and sign in ----------------------------*/

router.post('/signup', userController.signup)
router.post('/login', authController.login)
router.post('/user/verifyEmail', authController.verifyEmail)
router.post('/forgotpassword', authController.forgotPassword)
router.get('/resetpassword', authController.resetPassword)

/* ----------------------------- End  -----------------------------------*/

router.post('/user/complete/:id', userController.complete)
router.post('/user/update/:id', userController.update)
router.get('/user/tags/:search', userController.getTags)
router.get('/user/:id', userController.UserSelect)
router.post('/user/like', likesController.store)
router.post('/user/msg/store', messageController.store)

router.get('/user/like/get1/:id', likesController.get1)
router.get('/user/like/get2/:id', likesController.get2)
router.get('/user/like/delete/:user_id1/:user_id2', likesController.delete)
router.get('/user/browse/get/:id', browseController.get)
router.get('/user/msg/get', messageController.get)

router.get('/user/friend/get/:id', friendController.get)


module.exports = router