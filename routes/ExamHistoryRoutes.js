const express = require('express')
const router = express.Router()

//ATTEMPTED EXAM INFO

const examHistoryController = require('../controller/ExamHistoryController')

router.post('/addexam',examHistoryController.addExamData)
router.get('/getexamhistory/:uid/:eid',examHistoryController.getExamDataById)

module.exports = router