const express = require('express')
const productController = require('../controller/ProductController')

const router = express.Router()

router.get('/addproduct',productController.addProduct)

router.get('/getproducts',productController.getAllProducts)

module.exports = router