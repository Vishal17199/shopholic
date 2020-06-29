require('dotenv').config();
const express= require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const database = require('./database')
var bodyParser = require('body-parser')
const morgan = require('morgan')

require('./modal/user')
require('./modal/products')
require('./modal/slider')
require('./modal/sale')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/products'))

app.use(morgan('dev'))

   
if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}



app.listen(PORT,()=>{
    console.log("server is running")
})