const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type:String
    },
    discription: {
        required: true,
        type:String
    },
    type: {
        required: true,
        type: String
    },
    pic:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    reviews:[
        {
        reviwer:{
            type:String
        },       
        reviw:{
            type:String
        }
    }
    ],
    
},{timestamps:true})

mongoose.model("Product", productSchema)