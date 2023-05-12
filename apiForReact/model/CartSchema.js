const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    pid:{
        type:mongoose.Types.ObjectId,
        ref:'products1'
    }
})

module.exports = mongoose.model('carts1',cartSchema)
