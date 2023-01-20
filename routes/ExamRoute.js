const express = require('express')
const router = express.Router()

const validate= require('../middleware/ZodMiddleWare')
const examvalidationschema = require('../util/ExamSchemaValidation')
const auth = require('../middleware/AuthMiddleware')
const ExamController = require('../controller/ExamController')

router.post('/create',auth.auth(),ExamController.createExam)
// router.post('/create',validate(examvalidationschema),ExamController.createExam)
router.post('/removequestion',ExamController.removeQuestion)
router.post('/addquestion',ExamController.addQuestion)

module.exports=router