const express = require('express')
const router = express.Router()
const signupController = require('../controller/SignupController')
const loginController = require('../controller/LoginController')

router.post('/adduser',signupController.addUser)
router.post('/isuser',loginController.isUser)

module.exports = router 