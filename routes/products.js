//this route deals with all the product related query on site
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model("Product")
const Slider = mongoose.model("Slider")

//admin can add product from this post req ,login is need
router.post('/addproduct', (req, res) => {
    const { admintoken, name, discription, type, pic, price } = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if (admintoken != "vjsdfvhsdkivzhchvjuk") {
        return res.json({ error: "please log in as an  2" })
    }
    if (!name || !discription || !type || !pic || !price) {
        return res.json({ error: "please enter all the fields" })
    } else {
        const product = new Product({
            name,
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

//this route will send list of all products 
//used in many places like show data and if admin want to remove any product
router.get('/allproducts', (req, res) => {
    Product.find()
        .sort('-createdAt')
        .then(result => {
            res.json(result)
        }).catch(error => {
            res.json({ error })
        })
})

//only admin can remove product from this request
router.delete('/deleteproduct', (req, res) => {
    const { admintoken } = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if (admintoken != "vjsdfvhsdkivzhchvjuk") {
        return res.json({ error: "please log in as an admin" })
    }
    Product.findByIdAndDelete({ _id: req.body.productId })
        .then(result => {
            res.json(result)
        }).catch(error => {
            res.json({ error })
        })
})

//to chamge banner of side,admin login needed
router.post('/addslider', (req, res) => {
    const { admintoken, pic } = req.body
    if (!admintoken) {
        return res.json({ error: "please log in as an admin" })
    }
    if (admintoken != "vjsdfvhsdkivzhchvjuk") {
        return res.json({ error: "please log in as an admin" })
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


//to send banner image
router.get('/getslider', (req, res) => {
    Slider.find()
        .sort('-createdAt')
        .then((result) => {
            res.json({ data: result })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})
//to show product according to type ,shirt ,top etc
router.post('/getbytype', (req, res) => {
    Product.find({ type: req.body.type })
        .sort('-createdAt')
        .then((result) => {
            res.json({ data: result })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

//get a product details by its id
router.post('/getbyid', (req, res) => {
    Product.find({ _id: req.body.productId })
        .sort('-createdAt')
        .then((result) => {
            res.json({ data: result })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})

//to show latest arrival products on site
router.get('/getlatest', (req, res) => {
    Product.find()
        .sort('-createdAt')
        .then((result) => {
            const data1 = result[0]
            const data2 = result[1]
            const data3 = result[2]
            res.json({ data1, data2, data3 })
        })
        .catch((error) => {
            res.json({ error: error })
        })
})





module.exports = router;
