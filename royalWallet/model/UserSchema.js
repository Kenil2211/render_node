const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    storageLimit:{
        type:Number,
        default:100000000
    }
})

module.exports= mongoose.model('rt_user',userSchema)