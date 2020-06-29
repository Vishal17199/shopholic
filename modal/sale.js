const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    saleId: {
        required: true,
        type:String
    },
    
},{timestamps:true})

mongoose.model("sale",saleSchema)