const cartSchema = require('../model/CartSchema')

exports.addToCart = (req,res) =>{

    const newProduct = new cartSchema(req.body)

    newProduct.save((err,success)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in adding to cart"
            })
        }
        else{
                res.status(201).json({
                message:"Product added to cart",    
            })
        }
    })
}

exports.getCart = (req,res)=>{

    cartSchema.find((err,data)=>{
        if(err)
        {
            res.status(500).json({
                message:"Error in fetching cart"
            })
        }
        else{
                res.status(200).json({
                message:"cart fetched successfully ",
                data:data
            })
        }
    })
}
