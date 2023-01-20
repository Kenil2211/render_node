const signupSchema = require('../model/SignUpSchema')
const hash = require('../util/HashPassswordSync')

exports.addUser = (req,res)=>{

    
    req.body.password = hash.hashPassword(req.body.password)
    console.log(req.body.password)
    const user = new signupSchema(req.body)

    user.save((err,success)=>{ 
        if(err){
            res.status(500).json({
                message:"Error in adding user"
            })
        }
        else{
            res.status(201).json({
                message:"New User Added"
            })
        }
    })
}