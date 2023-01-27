const express = require('express')
const router = express.Router()

const userController = require('../controller/UserController')
const walletcontroller = require('../controller/WalletController')
const uploadController = require('../controller/UploadController')
const getUname = require('../util/getUname')


router.post('/adduser',userController.addUser)
router.post('/addwallet',walletcontroller.addWallet)
router.post('/upload',getUname.uname,uploadController.uploadFile);
router.put('/buyspace/:space',walletcontroller.updateBalance)
router.put('/buycoins/:coin',walletcontroller.buyCoins)
 
module.exports = router  