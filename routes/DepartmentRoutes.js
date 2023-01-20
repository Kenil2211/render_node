const express = require('express')
const router = express.Router()

const departmentController = require('../controller/DepartmentController')

router.get('/create',departmentController.createDepartment)

module.exports = router