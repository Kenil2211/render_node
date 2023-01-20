const mongoose= require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question:{
        type:String,
        required:true
    },
    options:[{
       type:String,
       required:true
    }] ,
    answer:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Questions',questionSchema);