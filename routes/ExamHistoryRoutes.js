const express = require('express')
const router = express.Router()

//ATTEMPTED EXAM INFO

const examController = require('../controller/ExamHistoryController')

router.post('/addexam',examController.addExamData)
router.get('/getexamhistory/:uid/:id',examController.getExamDataById)

module.exports = router