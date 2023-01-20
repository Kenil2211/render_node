const mongoose=require('mongoose')
const Schema = mongoose.Schema

const examUserSchema = new Schema({

    role:{
        type:Schema.Types.ObjectId,
        ref:'Role'
    },
    name:{
        type:String,
        required:true
    },

    exam:[{
        type:Schema.Types.ObjectId,
        ref:'Exam'
    }]
})

module.exports = mongoose.model('ExamUsers',examUserSchema) 