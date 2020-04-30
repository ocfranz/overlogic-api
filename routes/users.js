const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require('../models/User');

router.post('/signup', async (req, res) =>{
    const { username, email, password, name} = req.body;
    try{
        let userExists = await User.findOne({ email : email});
        if(userExists){
            res.status(400).json({message : "Email Already Exists"});
        }else{
            const newUser = new User({username: username, email : email , password : password, name : name});
            newUser.save()
                .then( data =>{
    
                    res.status(200).json({ id : data.id , username : data.username, password : data.password});
                    /*
                    const payload = {
                        user: { id: data.id}
                    };
                    console.log('payload', payload);
            
                    jwt.sign(payload,"randomString", {expiresIn: 10000},(err, token) => {
                        if (err){ 
                            throw err;
                        }else{
                            res.status(200).json({token});
                        }
                    });*/
                })
                .catch( err => {throw err});
        }v
        
    }catch (err){
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) =>{
    const { username, password } = req.body;
    try{
        let user = await User.findOne({username});
        console.log(user);
        if(!user){
            return res.status(400).json({message : "El usuario no existe"});
        }else{
            let isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);
            if(!isMatch){
                return res.status(400).json({message : "Password incorrecto"});
            }else{
                return res.status(400).json({auth: true});
            }
        }
    }catch (err){


    }
});



module.exports = router;
