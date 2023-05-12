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

    var id = req.params.id
    var uid1 = req.params.uid
    console.log('uid-',uid1)

    examHistorySchema.find({eid:id, uid:uid1},(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in getting exam History by id"
            })
        }
        else{
            res.status(201).json({
                message:"Success..",
                data:data
            })
        }
    })

}