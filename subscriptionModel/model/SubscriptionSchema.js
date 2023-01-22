const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subcriptionSchema = new Schema({

    userId:{
        type:Schema.Types.ObjectId,
        ref:'NetflixUsers',
        required:true,
        unique:true
    },
    api:[{
        type:Schema.Types.ObjectId,
        ref:'NetflixAPIs',
        required:true,
        unique:true
    }],
    validFor:[{
        type:String,
        required:true,
    }],
    count_hits:[{
        type:Number,
        required:true
    }],
    token:[{
        type:String,
        unique:true
    }]
},
{timestamps:true}
)

module.exports = mongoose.model('netflixsubscriptions',subcriptionSchema)