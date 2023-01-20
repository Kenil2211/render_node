const RoleSchema = require("../model/RoleSchema")
const ExamUserSchema = require('../model/ExamUserSchema')

const auth = () => async (req, res, next) => {
    obj = req.headers.uid
    console.log("UID-------",obj)
    
        
        ExamUserSchema.find({_id:obj},(err,data)=>{
            if(err)
            {
                res.status(500).json({
                    message:"Error"
                })
            }
            else
            { 
                //data = array of _id & role_id
                
                
                RoleSchema.findOne({_id:data[0].role,canCreateExam:true},(err,data1)=>{
                    if(err)
                    {
                        res.status(500).json({
                            message:"Error"
                        })
                    }
                    else
                    {
                        if(data1)
                        {
                            console.log(data1)
                            return next()
                        }
                        else
                        {
                            res.status(403).json({
                                message:"To create exam you should be either a teacher or an Admin"
                            })   
                        }
                    }
                })
            }
        })
        next()
    }



module.exports = { auth }