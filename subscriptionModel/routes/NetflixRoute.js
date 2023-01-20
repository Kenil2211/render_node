const express = require('express')
const router = express.Router()

const jwt = require('../middleware/AuthMiddleware')
const usercontroller = require('../controller/UserController')
const subscriptionController = require('../controller/SubscriptionController')


//user Routes
router.post('/adduser',usercontroller.addUser)


//subscription Routes

router.post('/subscribe',jwt.token,subscriptionController.addSubscription)

router.post('/getdata',jwt.verifyToken,subscriptionController.getDataByToken)



module.exports = router