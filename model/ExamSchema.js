const mongoose=require('mongoose')
const Schema = mongoose.Schema


const examSchema = new Schema({
    // role:{
    //     type:String,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    questions:[{
        type:Schema.Types.ObjectId,
        ref:'Question'
    }]
})

module.exports= mongoose.model('Exam',examSchema)