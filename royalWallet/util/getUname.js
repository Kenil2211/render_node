const userSchema = require('../model/UserSchema')

const uname = async(req,res,next) =>{

    userSchema.findOne({username:req.headers.uname},(err,success)=>{

        if(err){
          console.log("error")
        }
        else{
          console.log("e3d3c",success.storageLimit)
          return success.storageLimit
        }
    })
    next()
}

module.exports = {uname}