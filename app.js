const express = require('express')
const mongoose = require('mongoose')
const app=express()
const useragent = require('express-useragent')
require('dotenv').config()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(useragent.express())
app.use(cors())
const PORT= process.env.PORT || 3001
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
const RoyalTokenRoutes = require('./royalWallet/routes/RoyalTokenRoutes')
const locationTrackerRoutes = require('./location-tracker/routes/locationRoutes')
const ProductRoutes = require('./apiForReact/routes/ProductRoutes')
const cartRoutes = require('./apiForReact/routes/CartRoutes')
const ExamUserResultRoutes = require('./routes/ExamUserResultRoutes')
const ExamHistoryRoutes = require('./routes/ExamHistoryRoutes')

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
app.use('/wallet',RoyalTokenRoutes)
app.use('/tracker',locationTrackerRoutes)
app.use('/product',ProductRoutes)
app.use('/cart',cartRoutes)
app.use('/examresult',ExamUserResultRoutes)
app.use('/examhistory',ExamHistoryRoutes)

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