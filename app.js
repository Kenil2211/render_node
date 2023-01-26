const express = require('express')
const mongoose = require('mongoose')
const app=express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT= process.env.PORT || 3000
const MONGO_PASSWORD=process.env.MONGO_PASSWORD
// module.exports={PORT}

// const fapiRoute = require('./routes/firstApiRoute')
const UserRoute = require('./routes/UserRoute')
const EmployeeRoute = require('./routes/EmployeeRoutes')
const DepartmentRoute = require('./routes/DepartmentRoutes')
const ExamRoute = require('./routes/ExamRoute')
const ExamUserRoute = require('./routes/ExamUserRoute')
const QuestionRoute = require('./routes/QuestionRoute')
const RoleRoutes = require('./routes/RoleRoutes')
const SignupRoute = require('./routes/SignupRoutes')
const uploadRoutes = require('./routes/UploadRoutes');
const NetflixRoutes = require('./subscriptionModel/routes/NetflixRoute')
const GdriveRoutes = require('./routes/GDriveRoutes')

// app.use('/fapi',fapiRoute)

app.use('/user',UserRoute)
app.use('/employee1',EmployeeRoute)
app.use('/department',DepartmentRoute)
app.use('/exam',ExamRoute)
app.use('/examuser',ExamUserRoute)
app.use('/examquestion',QuestionRoute)
app.use('/role',RoleRoutes)
app.use('/upload',uploadRoutes)
app.use('/signup',SignupRoute)
app.use('/netflix',NetflixRoutes)
app.use('/gdrive',GdriveRoutes)

// connect with cluster
// mongoose.connect("mongodb+srv://kenil:"+MONGO_PASSWORD+"@cluster0.599iw6h.mongodb.net/club5?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,

// },(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("DB connected");
//     }
// })


//connect with local host 


mongoose.connect("mongodb://127.0.0.1:27017/club5",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected");
    }
})

app.listen(PORT,()=>{
    console.log("server started "+PORT)
})