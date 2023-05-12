const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examUserResultSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'ExamUsers'
    },
    exam: [{
        "eid": {
            type: Schema.Types.ObjectId,
            ref: 'Exam'
        },
        "result": {
            type: Number,
            default: null
        }
    }]  
})

module.exports = mongoose.model('ExamResults', examUserResultSchema)