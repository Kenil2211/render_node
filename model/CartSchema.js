const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    uid:{
        type:Schema.Types.ObjectId,
        ref:'User' 
    },
    pid:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
    createdAt:{timestamps:true}
})