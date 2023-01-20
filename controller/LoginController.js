const signupschema =  require('../model/SignUpSchema')
const hash = require('../util/HashPassswordSync')

exports.isUser = (req,res)=>{

    const uname = req.body.username
    const password = req.body.password //kenil
    
    signupschema.find({username:uname},(err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error"
            })
        }
        else{
            const h_pass = data.password
            if(hash.comparePassword(password,h_pass))
            {
                res.status(200).json({
                    message:"User Log in Succesfull"
                })
            }           
            else{
                res.status(200).json({
                    message:"Log in Denied.."
                })
            }
        }
    })
}