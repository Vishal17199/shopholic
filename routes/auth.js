const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//secret token for admin only
//vjsdfvhsdkivzhchvjuk
router.post('/adminsignin',(req,res)=>{
    const {adminId,adminPassword} = req.body;
    if(!adminId || !adminPassword){
        return res.json({error:"please fill all the fields"})
    }
    if( adminId=="vishal123" || adminPassword=="password123")
    {
      return  res.json({msg:"log in success",admintoken:"vjsdfvhsdkivzhchvjuk"})
    }else{
        return  res.json({error:"incorrect id or password"})
    }
})



module.exports=router;
