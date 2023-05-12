const express = require('express')
const router = express.Router()

const examUserResultController = require('../controller/ExamUserResultController')

router.post('/addresult/:uid/:eid',examUserResultController.addResult)
router.get('/calresult/:uid/:eid',examUserResultController.calculateResult)

module.exports = router 