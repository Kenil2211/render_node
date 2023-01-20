const mongoose = require('mongoose')
const Schema = mongoose.Schema

const signupSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Signup1',signupSchema)