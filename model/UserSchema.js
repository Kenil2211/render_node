const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    isActive:{
        type:Boolean
    }
})
module.exports = mongoose.model('User',userSchema)