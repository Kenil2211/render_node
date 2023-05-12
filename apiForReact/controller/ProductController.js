const productSchema = require('../model/ProductSchema')

exports.addProduct = (req,res) =>{

    const newProduct = new productSchema(req.body)

    newProduct.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in adding Products"
            })
        }
        else{
                res.status(201).json({
                message:"Product added ",
            })
        }
    })
}

exports.getAllProducts = (req,res)=>{

    productSchema.find((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in fetching Products"
            })
        }
        else{
                res.status(200).json({
                message:"Product fetched successfully ",
                data:data
            })
        }
    })
}