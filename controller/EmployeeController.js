const employeeSchema = require('../model/EmployeeSchema')

exports.createEmployee = (req,res)=>{
    const employee = new employeeSchema(req.body)

    employee.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error..."
            })
        }
        else
        {
            res.status(201).json({
                message:"Employee added",
                data:success
            })
        }
    })
}

