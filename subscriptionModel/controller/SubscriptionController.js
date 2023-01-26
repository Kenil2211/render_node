const subSchema = require('../model/SubscriptionSchema')
const IP = require('ip')

exports.addSubscription = (req,res)=>{

    const new_sub = new subSchema(req.body)

    new_sub.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in availing subscription"
            })
        }
        else{
                res.status(201).json({
                message:"Subscription added ",
            })
        }
    })
}

exports.getDataByToken = (req,res) =>{

    const uid = req.body.data.userId
    subSchema.find({userId:uid},(err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error."
            })
        }
        else{
            res.status(200).json({
                message:"Subscribed User",
                "data":data                
            })
        }
    })
}

exports.subscribeApi = (req,res) =>{

    // console.log('userid : ',req.body.userId)
    const ipAddress = IP.address()
    
    console.log("------",req.socket.remoteAddress,"--------",ipAddress)
    subSchema.findOneAndUpdate(
        {_id:req.body.id},
        {$push : {api:req.body.api, validFor:req.body.validFor,count_hits:req.body.count_hits} },
        {new:true},
        (err,success)=>{
            if(err){
                res.status(500).json({
                    message:"Error in subscribing to this API"
                })
            }
            else{
                res.status(200).json({
                    message:"Successfully Subscribed to API"
                })
            }
        }
    )
}
