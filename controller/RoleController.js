const roleSchema = require('../model/RoleSchema')

exports.addNewRole = (req,res)=>{

    const newRole = new roleSchema(req.body)
    
    newRole.save((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error.."
            })
        }
        else
        {
            res.status(201).json({
                message:"Role Added",
                data:data
            })
        }
    }) 
}

exports.getRoles = (req,res)=>{

    roleSchema.find({canCreateExam:true},(err,data)=>{

        if(err)
        {
            res.status(500).json({
                message:"Error..."
            })
        }
        else
        {
            res.status(200).json({
                message:"Data feteched successfully",
                data:data
            })
        }
    })
}

