const UserSchema = require('../model/UserSchema')
const useragent = require('express-useragent')
const ipLocation = require('ip-location')


exports.getAllUsers = (req,res)=>{
    function showPosition(position) {
        console.log( position.coords.latitude )
    }
  
    UserSchema.find( (err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in fetching data"
            })
        }
        else{
            // console.log(req.getHeader())
            
            // navigator.geolocation.getCurrentPosition(showPosition)
            
            // console.log(req.useragent.isMobile)
            res.status(201).json({
                    message:"Data fetched successfully",
                    data:data
            })
        }
    })
}

exports.createUser = (req, res) => {
    //object .... req.body....
    console.log(req.body);
    const user = new UserSchema(req.body);
    user.save((err, success) => {
      if (err) {
        res.status(500).json({
          message: "Error in saving data",
        });
      } else {
        res.status(201).json({
          message: "Data saved successfully",
          data: success,
        });
      }
    });
  };

exports.getUserById=(req,res)=>{
    id=req.params.id
    UserSchema.findById(id, (err,data)=>{
        if(err)
        {
            res.status(500).json({
                message : "Error in Fetching data"
            })
        }
        else{
            res.status(200).json(
                {
                    message:"Data fetched successfully",
                    data:data
                }
            )
        }
    } )
}


exports.deleteUser = (req,res)=>{
    id = req.params.id
    UserSchema.findByIdAndDelete(id, (err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in fetching data"
            })
        }
        else
        {
            res.status(204).send()
        }
    })
}

exports.updateUser = (req,res)=>{
    id = req.params.id
    UserSchema.findByIdAndUpdate(id, req.body, (err,success)=>{
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
                data:success
            })
        }
    })

}