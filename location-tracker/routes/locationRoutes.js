const express =require('express')
const router = express.Router()

const userController = require('../controller/UserController')

router.get('/getlocation',userController.getLocation)

module.exports= router