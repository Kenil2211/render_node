const examHistorySchema = require('../model/ExamHistorySchema')

//ATTEMPTED EXAM INFO

exports.addExamData = (req,res)=>{

    const examData = new examHistorySchema(req.body)

    examData.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in adding exam History"
            })
        }
        else{
            res.status(201).json({
                message:"Result added",
                data:success
            })
        }
    })
}

exports.getExamDataById = (req,res)=>{

    var eid = req.params.eid
    var uid1 = req.params.uid
    console.log('uid-',uid1)

    examHistorySchema.find({eid:eid, uid:uid1},(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in getting exam History by id"
            })
        }
        else{
            if(data && data.length>0)
            {
                res.status(201).json({
                    message:"Success..",
                    data:data[0].answers
                })
            }
            else{
                res.status(201).json({
                    message:"Success..",
                    data:data[0].answers
                })
            }

        }
    })

}