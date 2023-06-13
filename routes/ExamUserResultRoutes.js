const express = require('express')
const router = express.Router()

const examUserResultController = require('../controller/ExamUserResultController')

// router.post('/addresult/:uid/:eid',examUserResultController.addResult)

router.post('/addresult/:uid/:eid',examUserResultController.addNewResult)

router.get('/calresult/:uid/:eid',examUserResultController.calculateResult)
router.get('/getresults/:uid',examUserResultController.getResults)
router.get('/:uid/:eid',examUserResultController.getResultByEid)

module.exports = router 