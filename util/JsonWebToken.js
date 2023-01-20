const jwt = require('jsonwebtoken')
const brcypt = require('bcrypt')

const secret = "secret"

const get_token = async(user)=>{

    jwt.sign(user,secret,
        {expiresIn:"1 months"}, 
        (err,Usertoken)=>{

        if(err){
            console.log(err)
        }        
        else{
            console.log(Usertoken)
            const hash_token = brcypt.hashSync(Usertoken,10)
            console.log("hashed = ",hash_token)
            return hash_token
        }
    })
}

// const get_data = (Token)=>{

//     var tok = jwt.verify(Token ,secret)
//    console.log("tttt",tok)
// }

// get_data("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2VuaWwiLCJpZCI6IjEiLCJpYXQiOjE2NzQxMjE2MDYsImV4cCI6MTY3NDEyNTIwNn0.ryCHV0fIHivf-tIsoapnIMHdip79xJ_CdYhmXMKtGA0")

get_token({"name":"Kenil","id":"1"})

// get_data("hello")