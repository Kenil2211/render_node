const QuestionSchema = require('../model/QuestionSchema')
const ExamSchema = require('../model/ExamSchema')

exports.createQuestion = (req, res) => {

    const question = new QuestionSchema(req.body)

    question.save((err, success) => {
        if (err) {
            res.status(500).json({
                message: "Error in saving data"
            })
        }
        else {
            res.status(201).json({
                message: "Question created successfully"
            })
        }
    })
}

exports.getQuestionById = (req, res) => {

    id = req.params.id

    QuestionSchema.findById(id, (err, data) => {

        if (err) {
            res.status(500).json({
                message: 'Error in getquestionbyid'
            })
        }
        else {
            res.status(200).json({
                message: 'question found',
                data: data
            })
        }
    })
}

