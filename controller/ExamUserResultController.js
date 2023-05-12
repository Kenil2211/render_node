const ExamHistorySchema = require('../model/ExamHistorySchema')
const examUserResultSchema = require('../model/ExamUserResultSchema')

exports.addResult = (req, res) => {

    const eid = req.params.eid
    const uid = req.params.uid

    const result = new examUserResultSchema(req.body)

    console.log('reee-', req.body)
    result.save((err, success) => {
        if (err) {
            res.status(500).json({
                message: "Error in adding results"
            })
        }
        else {
            res.status(201).json({
                message: "Result added",
                data: success
            })
        }
    })

}

exports.calculateResult = async (req, res) => {

    var uid = req.params.uid
    var eid = req.params.eid
    var marks = 0

    ExamHistorySchema.find({ eid: eid, uid: uid }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error in calculate result" 
            })
        }
        else {
            if (data && data.length>0) {
                console.log(data)
                var check = data[0].answers
                check.map((c) => { 
                    console.log('ccccccc', typeof (c.givenAnswer), ' coreeee', typeof (c.correctAnswer))
                    if (c.givenAnswer === c.correctAnswer) {
                        marks++; 
                        console.log('marks++')
                    }
                    console.log('marks--')
                })
                console.log('marks obtained--', marks)
                res.status(200).json({
                    message: "Marks Obtained",
                    marks: marks 
                })
            }
        }
    })
}