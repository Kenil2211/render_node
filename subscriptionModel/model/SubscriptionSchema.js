const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subcriptionSchema = new Schema({

    userId:{
        type:Schema.Types.ObjectId,
        ref:'NetflixUsers',
        required:true,
        unique:true
    },
    validFor:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        unique:true
    }
},
{timestamps:true}
)

module.exports = mongoose.model('netflixsubscriptions2',subcriptionSchema)