const bcrypt = require ('bcrypt')
const saltRounds = 10

function hashPassword(password)
{
    const hashedpass = bcrypt.hashSync(password,10)
    return hashedpass
}
// console.log(hashPassword('kenil'))

module.exports= {hashPassword}


function comparePassword(password,hashedpassword)
{
    return (bcrypt.compareSync(password,hashedpassword))
} 
module.exports={comparePassword}
