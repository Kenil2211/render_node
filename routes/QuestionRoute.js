const express = require('express')
const router = express.Router()

const QuestionController = require('../controller/QuestionController')

router.post('/create',QuestionController.createQuestion)

module.exports=router