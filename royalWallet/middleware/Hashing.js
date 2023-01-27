const hash = require('../util/Hash')

const hashPassword1 = () => async(req,res,next)=>{

    req.body.password = hash.hashPassword(req.body.password)
    console.log('9999999999',req.body.password)
    next()
}

module.exports = {hashPassword1}