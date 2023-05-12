const userSchema = require('../model/UserSchema')
const IP = require('ip')
const location = require('iplocation')
const {Navigator} =  require('node-navigator')
const navigator = new Navigator()

exports.getLocation = (req,res)=>{

    console.log("ipaddress==",IP.address())
   
    res.json({
        message:"IP got===="+IP.address()
    })
    console.log(navigator.geolocation.getCurrentPosition())
}
