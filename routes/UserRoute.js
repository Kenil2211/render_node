const userController = require('../controller/userController')
const express = require('express')
const router= express.Router()

router.get('/user',userController.getAllUsers)
router.post('/user',userController.createUser)
router.get('/getuser/:id',userController.getUserById)
router.delete('/deleteuser/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)

module.exports = router