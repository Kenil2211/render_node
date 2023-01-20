const mongoose = require('mongoose')
const Schema = mongoose.Schema

const apiSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    hitsPerDay:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('NetflixAPIs',apiSchema)