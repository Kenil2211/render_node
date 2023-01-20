const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    canCreateExam:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model('Role',roleSchema)