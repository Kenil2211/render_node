const firstApiRoute=require('../controller/firstApiController')
const exp=require('express')
const router=exp.Router()

router.get('/fapi',firstApiRoute.firstApi)

module.exports=router