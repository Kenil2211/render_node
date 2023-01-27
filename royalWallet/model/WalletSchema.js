const mongoose = require('mongoose')
const Schema = mongoose.Schema

const walletSchema = new Schema({

    uid:{
        type:Schema.Types.ObjectId,
        ref:'rt_user',
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        default:100
    }
})

module.exports = mongoose.model('rt_wallet',walletSchema)