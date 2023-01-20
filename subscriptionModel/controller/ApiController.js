const apiSchema = require('../model/apiSchema')

exports.addApi = (req,res) =>{

    const newApi = new apiSchema(req.body)

    newApi.save((err,success)=>{

        if(err){
            res.status(500).json({
                message:"Error in creating api"
            })
        }
        else{
            res.status(201).json({
                message:"Api Created Successfully"
            })
        }
    })
}