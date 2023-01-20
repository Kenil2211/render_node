const mongoose = require('mongoose')
const Schema = mongoose.Schema

//one user subscribe to many apis =>hits differently on each API

const userApiSchema = new Schema({

    uid:{
        type:Schema.Types.ObjectId,
        ref:'NetflixUsers',
        required:true
    },
    api:[{
        type:Schema.Types.ObjectId,
        ref:'NetflixAPIs',
        required:true,
        unique:true
    }],
    count_hits:[{
        type:Number,
        required:true
    }]

}) 