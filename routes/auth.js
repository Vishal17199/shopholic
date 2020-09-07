const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//login for admin
//username , password is hardcoded in program
// also it is possible to do it through database but not needed now
router.post('/adminsignin', (req, res) => {
    const { adminId, adminPassword } = req.body;
    if (!adminId || !adminPassword) {
        return res.json({ error: "please fill all the fields" })
    }
    if (adminId == "vishal123" || adminPassword == "password123") {
        return res.json({ msg: "log in success", admintoken: "vjsdfvhsdkivzhchvjuk" })
    } else {
        return res.json({ error: "incorrect id or password" })
    }
})



module.exports = router;
