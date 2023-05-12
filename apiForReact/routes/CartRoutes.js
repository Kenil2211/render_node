const express = require('express')
const cartController = require('../controller/CartController')

const router = express.Router()

router.post('/addtocart',cartController.addToCart)
router.get('/getcart',cartController.getCart)

module.exports = router