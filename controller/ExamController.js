const ExamSchema = require('../model/ExamSchema')

exports.createExam = (req, res) => {

    const exam = new ExamSchema(req.body)

    exam.save((err, success) => {
        if (err) {
            res.status(500).json({
                message: "Error in saving data"
            })
        }
        else {
            res.status(201).json({
                message: "Exam Created successfully"
            })
        }
    })
}

exports.removeQuestion = (req,res) =>{

    ExamSchema.findOneAndUpdate(
        {_id:req.body.id},
        {$pull: {questions :req.body.questionid} },
        {new:true},
        (err,data)=>{
            if(err)
            {
                res.status(500).json({
                    message:"Error..."
                })
            }
            else{
                console.log(data)
                res.status(200).json({
                    message:"Question removed.."
                })
            }
        }
    )
}

exports.addQuestion = (req,res)=>{
    ExamSchema.findOneAndUpdate(
        {_id:req.body.id},
        {$push : {questions:req.body.questions} },
        {new : true},
        (err,data)=>{
            if(err)
            {
                res.status(500).json({
                    message:"Error.."
                })
            }
            else
            {
                res.status(200).json({
                    message:"New Question Set added"
                })
            }
        }
    )
}