const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user")

router.post("/register", async (req,res) => {

    const {email,login,password} = req.body;

    if(!email.includes("@")){
        return res.status(400).json({
            message:"Wrong email"
        })
    }

    if(password.length < 7){
        return res.status(400).json({
            message:"Password must be minimum 8 letters"
        })
    }
    
    const existinguser = await User.findOne({
        $or:[
            {email},
            {login}
        ]});

    if(existinguser){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const handlePassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        
        email:email,
        login:login,
        password:handlePassword

    })

    await newUser.save()

    res.json({
        message:"User created"
    })

})



router.post("/login", async (req,res) => {

    const{login,password} = req.body

    const user = await User.findOne({login})

    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.status(400).json({
            message:"Wrong password"
        })
    }

    res.json({
        message:"Login success"
    })
})

module.exports = router;
