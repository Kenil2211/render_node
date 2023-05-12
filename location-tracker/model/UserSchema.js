const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const userSchema = new Schema({

    name:{
        type:String
    },
    ipAddress:{
        type:String
    }
})

module.exports = mongoose.model('lt_user',userSchema)