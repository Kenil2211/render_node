const userSchema= require('../model/UserSchema')


exports.addUser = (req,res)=>{

    const user = new userSchema(req.body)
    user.save((err,success)=>{

        if(err)
        {
            res.status(500).json({
                message:"Error in adding new user to RT"
            })
        }
        else{
            
            res.status(201).json({
                message:"RT new user added"
            })
        }
    })
}

