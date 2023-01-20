const userSchema = require('../model/UserSchema')

exports.addUser = (req,res)=>{
    
    const new_user = new userSchema(req.body)

    new_user.save((err,success)=>{

        if(err)
        {
            res.status(500).json({
                message:"Error in adding user"
            })
        }
        else{
            res.status(201).json({
                message:"New user Created"
            })
        }
    })
}