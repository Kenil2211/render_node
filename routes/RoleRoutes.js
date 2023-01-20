const express= require('express')
const router = express.Router()

const roleController = require('../controller/RoleController')

router.post('/addrole',roleController.addNewRole)
router.get('/role',roleController.getRoles)

module.exports = router