const zod= require('zod')


const examSchema = zod.object({
    body:zod.object({
        role:zod.string({
            required_error:"Specify your role to create a Test",
            invalid_type_error:"Your role must Admin or Faculty to create a Test"
        }),
        name:zod.string(),
        questions:zod.string().array()
    }).strict()
})

module.exports=examSchema