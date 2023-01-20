const brypt = require('bcrypt')
const saltRounds = 10

exports.hashPassword= async(password)=>{

    const h_pass = await brypt.hash(password,saltRounds)
    
    h_pass.then((res)=>{
        return res
    })
}
// console.log(hashPassword('kenil'))


// exports.comparePassword = async(password,hashPassword) => {

//     const match = await brypt.compare(password,hashPassword)
//     return match
// }

// comparePassword('kenil',"$2b$10$eUnvxAy1.YD9qkXXhxZZi.K5aLFw0OCX/v/4yEFtdxvWZN2uPGtFi").then((res)=>{

//     console.log(res)
// })