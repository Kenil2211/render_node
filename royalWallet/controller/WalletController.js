const walletSchema = require('../model/WalletSchema')
const userSchema = require('../model/UserSchema')

exports.addWallet = (req,res)=>{

    const wallet = new walletSchema(req.body)
    wallet.save((err,success)=>{

        if(err)
        {
            res.status(500).json({
                message:"Error in adding new wallet to RT"
            })
        }
        else
        {
            res.status(201).json({
                message:"RT new wallet added"
            })
        }
    })

}

exports.updateBalance = (req,res)=>{
 
    const coins = req.params.space/1000000  
    const id = req.body._id
    console.log("coins to be deducted= ",coins)
    console.log("id---",id)
    walletSchema.findOne({uid:id},(err,data)=>{

        if(err){
            res.status(500).json({
                message:"Error"
            })
        }
        else{
            
                let cur_bal = data.balance 
                walletSchema.updateOne({uid:id},{balance:cur_bal-coins},(err,success)=>{
                    if(err){
                        res.status(500).json({
                            message:"Error..."
                        })
                    }
                    else{
                        userSchema.findOne({_id:id},(err,data1)=>{
                            if(err){
                                res.status(500).json({
                                    message:"Error"
                                })
                            }
                            else{
                                let cur_storage = parseInt( data1.storageLimit )
                                userSchema.updateOne({_id:id},{storageLimit:cur_storage+parseInt(req.params.space)},(err,data2)=>{
                                    if(err)
                                    {
                                        res.status(500).json({
                                            message:"Error"
                                        })
                                    }
                                    else{
                                        res.status(200).json({
                                            message:"More Storage Allocated..Enjoy!!"
                                        })
                                    }
                                })

                            }

                        })
                    }
                })
        }
    })


}


exports.buyCoins = (req,res)=>{

    const coins = req.params.coin  
    const id = req.body._id
    const moreSpace = parseInt(coins)*1000000
    // console.log("coins to be deducted= ",coins)
    // console.log("id---",id)
    walletSchema.findOne({uid:id},(err,data1)=>{
        if(err){
            res.status(500).json({
                message:"Error..."
            })
        }
        else
        {
            let cur_coins = data1.balance  
            walletSchema.updateOne({uid:id},{balance:cur_coins+parseInt(coins)},(err,data2)=>{
                if(err){
                    res.status(500).json({
                        message:"Error..."
                    })
                }
                else{

                    userSchema.find({_id:id},(err,data3)=>{
                        if(err){
                            res.status(500).json({
                                message:"Error..."
                            })
                        }
                        else{
                            let cur_storage = data3.storageLimit
                            userSchema.updateOne({_id:id},{storageLimit:cur_storage+moreSpace},(err,data4)=>{
                                if(err){
                                    res.status(500).json({
                                        message:"Error..."
                                    })
                                }
                                else{
                                    res.status(200).json({
                                        message:"Coins Bought Successfully.."
                                    })
                                }
                            })
                        }
                    })
                }
            })

        }
    })
}