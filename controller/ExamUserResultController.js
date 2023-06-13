const ExamHistorySchema = require('../model/ExamHistorySchema')
const examUserResultSchema = require('../model/ExamUserResultSchema')


exports.addNewResult = (req, res) => {

    const uid = req.body.uid
    const result = new examUserResultSchema(req.body)
    const new_value = req.body.exam[0]
    var user_exists_flag;

    examUserResultSchema.find({ uid: uid }, (err, flag) => {
        if (err) {
            return false
        }
        else {

            console.log("flag--", flag)
            
            if (flag.length != 0 ) {
                console.log("ifff....")
                examUserResultSchema.findOneAndUpdate(
                    { uid: uid },
                    { $push: { exam: new_value } },

                    (err, success) => {
                        if (err) {
                            res.status(500).json({
                                message: "error in adding results"
                            })
                        }
                        else {
                            res.status(200).json({
                                message: "Added result successfully",
                                success:success
                            })
                        }

                    }
                )
            }
            else{
                console.log("else....")
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

        }
    })

    console.log("user flag--", user_exists_flag)

    // console.log("user value--",user_exists)



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
            if (data && data.length > 0) {
                console.log(data)
                var check = data[0].answers
                check.map((c) => {
                    console.log('given ans=',c.givenAnswer,' correct answer==',c.correctAnswer)
                    if (c.givenAnswer === c.correctAnswer) {
                        marks++;
                        console.log('marks++')
                    }else{
                        console.log('marks--')
                    }
                })
                console.log('marks obtained==>', marks)

                res.status(200).json({
                    message: "Marks Obtained",
                    marks: marks
                })
            }
        }
    })
}

exports.getResults = (req, res) => {

    var uid = req.params.uid

    examUserResultSchema.find({uid:uid},(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error..."
            })
        }
        else
        {
            res.status(200).json({
                message:"Success",
                data:data
            })
        }
    })

}

exports.getResultByEid = (req,res)=>{

    var uid=req.params.uid
    var eid=req.params.eid
    var examData;
    examUserResultSchema.find({uid:uid},(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:'err'
            })
        }
        else{
            examData = data[0].exam
            
            
            res.status(200).json({
                message:'success',
                data:examData.filter((e)=>{
                    if(e.eid == eid)
                    {
                        return true
                    }
                    return false
                })
            })
        }

    })
} 