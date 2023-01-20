const ExamUserSchema = require('../model/ExamUserSchema')

exports.createUser=(req,res)=>{

    const euser = new ExamUserSchema(req.body)
    
    euser.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in saving data"
            })
        }
        else{
            res.status(201).json({
                message:"User added successfully"
            })
        }
    })    
}

exports.getAllUserDetails= (req,res)=>{
   
    ExamUserSchema.find().populate('exam').exec((err,data)=>{

        if(err)
        {
            res.status(500).json({
                message:"Error..."
            })
        }
        else
        {
            res.status(200).json({
                message:"Data fetched successfully",
                data:data
            })
        }
    })

}

exports.getUserDetailsById = (req,res)=>{

    id = req.params.id

    ExamUserSchema.findById(id).populate('exam').exec((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error.."
            })
        }
        else
        {
            res.status(200).json({
                message:"Data Fetched succefully",
                data:data
            })
        }
    })

}

exports.getAppearedUsersByExamid = (req,res)=>{

    id= req.params.id
    ExamUserSchema.find({exam:id},(err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error.."
            })
        }
        else
        {
            res.status(200).json({
                message:"Data fetched succesfull",
                data:data
            })
        }
    })
}