const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Product = mongoose.model("Product")
const Slider = mongoose.model("Slider")
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const bcrypt = require('bcryptjs')
const requireLogin = require('../middleware/requireLogin')

router.post('/addproduct',(req, res) => {
    const {admintoken, name ,discription ,type, pic ,price } = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if(admintoken != "vjsdfvhsdkivzhchvjuk" )
    {
      return  res.json({error:"please log in as an  2"})
    }
    if (!name || !discription || !type || !pic || !price) {
        return res.json({ error: "please enter all the fields" })
    } else {
        const product = new Product({
            name ,
            discription, 
            type,
             pic,
             price
        })
         product.save()
            .then((result) => {
                res.json({ msg: result })
            })
            .catch((error) => {
                res.json({ error: error })
            })
    }
})


router.get('/allproducts',(req,res)=>{
    Product.find()
        .then(result => {
            res.json(result)
        }).catch(error => {
            res.json({error})
        })
})

router.delete('/deleteproduct', (req, res) => {
    const {admintoken } = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if(admintoken != "vjsdfvhsdkivzhchvjuk" )
    {
      return  res.json({error:"please log in as an admin"})
    }
    Product.findByIdAndDelete({ _id: req.body.productId })
        .then(result => {
            res.json(result)
        }).catch(error => {
            res.json({error}) 
               })
})


router.post('/addslider',(req, res) => {
    const {admintoken ,pic} = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if(admintoken != "vjsdfvhsdkivzhchvjuk" )
    {
      return  res.json({error:"please log in as an admin"})
    }
    if (!pic) {
        return res.json({ error: "please add image" })
    } else {
        const slider = new Slider({
             pic
        })
         slider.save()
            .then((result) => {
                res.json({ msg: result })
            })
            .catch((error) => {
                res.json({ error: error })
            })
    }
})



router.get('/getslider',(req, res) => {
            Slider.find()
            .sort('-createdAt')
            .then((result) => {
                res.json({data: result })
            })
            .catch((error) => {
                res.json({ error: error })
            })
})

router.post('/getbytype',(req, res) => {
    Product.find({type:req.body.type})
    .sort('-createdAt')
    .then((result) => {
        res.json({data: result })
    })
    .catch((error) => {
        res.json({ error: error })
    })
})


router.post('/getbyid',(req, res) => {
    Product.find({_id:req.body.productId})
    .sort('-createdAt')
    .then((result) => {
        res.json({data: result })
    })
    .catch((error) => {
        res.json({ error: error })
    })
})

router.get('/getlatest',(req, res) => {
    Product.find()
    .sort('-createdAt')
    .then((result) => {
        const data1=result[0]
        const data2=result[1]
        const data3=result[2]
        res.json({data1,data2,data3})
    })
    .catch((error) => {
        res.json({ error: error })
    })
})





module.exports = router;
