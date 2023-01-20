const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    Available_qty:{
        type:Number,
        required:true,
    },
    description:{
        type:String
    },
})
createdAt:{timestamps:true}

module.exports = mongoose.model('Product',productSchema)