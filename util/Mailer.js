const mailer = require('nodemailer');

const sendMail = async (to,text1)=>{

    let transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, //465 for ssl
        secure: false, // true for 465, false for other ports
        auth:{
            user:"kenilpatel221102@gmail.com",
            pass:"wmohvkjqpbkqhdql"
        } 
    })

    const mailOptions ={
        from:'kenilpatel221102@gmail.com',
        to:to,
        subject:'Test Mail-1',
        text:text1
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}
sendMail('omshan.patel@gmail.com',"new mail for you")