const subSchema = require('../model/SubscriptionSchema')
const jwt = require('jsonwebtoken')
const jwt_expire = require('jwt-check-expiration')

const token = async (req,res,next) => {
    

    jwt.sign(req.body,"secret",
    {
        expiresIn: "24h",
    },(err,result)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error........."
            })
        }
        else
        {
            mytokens = req.body.token
            mytokens.push(result)
            // console.log("wced",result)
        }
        next()
    })}
    
    
const verifyToken = async (req,res,next) =>{

    const u_token = req.headers.authorization
    // console.log("hcbkcncenlcenc",u_token)
    // console.log("headersss",req.headers);
    // console.log("ejnjken",jwt_expire.isJwtExpired(u_token))
    // console.log("tokennnn", u_token)
    const data1 = jwt.verify(u_token,"secret")
    // console.log("token decryptes ===",data1)
    subSchema.findOne({userId:data1.userId},(err,success)=>{
        if(err){
            res.status(500).json({
                message:"Error.."
            })
        }
        else{
            req.body.data = data1
            console.log("99999999990000",req.body) 
            next()
        }
    })
}


module.exports = {token,verifyToken}