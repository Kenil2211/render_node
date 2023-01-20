const QuestionSchema = require('../model/QuestionSchema')

exports.createQuestion=(req,res)=>{

    const question = new QuestionSchema(req.body)
    
    question.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in saving data"
            })
        }
        else{
            res.status(201).json({
                message:"Question created successfully"
            })
        }
    })    
}