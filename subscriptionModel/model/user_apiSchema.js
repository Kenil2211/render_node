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
        ref:'myApis',
        unique:true
    }],

}) 