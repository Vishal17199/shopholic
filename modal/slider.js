const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    pic: {
        required: true,
        type:String
    },
    
},{timestamps:true})

mongoose.model("Slider",sliderSchema)