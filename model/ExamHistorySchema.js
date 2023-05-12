const mongoose= require('mongoose')
const Schema = mongoose.Schema

//ATTEMPTED EXAM INFO

const examHistory = new Schema({

    uid:{
        type:Schema.Types.ObjectId,
        ref:'ExamUsers'
    },

    eid:{
        type:Schema.Types.ObjectId,
        ref:'Exam'
    },

    answers:[{

        qid:{
            type:Schema.Types.ObjectId,
            ref:'Questions'
        },

        givenAnswer:{
            type:String,
        },  

        correctAnswer:{
            type:String,
        }
        
    }]

})

module.exports = mongoose.model('ExamHistory',examHistory)