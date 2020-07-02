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
            return res.status(200).send({mailExists: true, message : "Email Already Exists"});
        }else{
            let usernameExists = await User.findOne({ username : username});
            if(usernameExists){
                return res.status(200).send({userExists: true, message : "Username has already been taken"});
            }else{
                const newUser = new User({username: username, email : email , password : password, name : name});
                newUser.save()
                    .then( data =>{
                        return res.status(200).send({ id : data.id , username : data.username, password : data.password});
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
            }

            
        }
        
    }catch (err){
        res.status(500).send(err);
    }
})

router.post('/login', async (req, res) =>{
    const { username, password } = req.body;
    try{
        let user = await User.findOne({username});
        console.log(user);
        if(!user){
            return res.status(404).send({message : "User does not exist"});
        }else{
            let isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);
            if(!isMatch){
                return res.status(200).send({message : "Wrong password", id : user.id, auth: false});
            }else{
                return res.status(200).send({auth: true, id : user.id});
            }
        }
    }catch (err){
        res.status(500).send(err);
    }
});

router.get('/info/:id', async (req, res) =>{
    const { id } = req.params;
    try{
        let user = await User.findOne({_id: id});
        console.log(user);
        if(!user){
            return res.status(200).send({userExists: false,message : "User does not exist"});
        }else{
            return res.status(200).send({userExists: true, id : user.id, name : user.name});
        }
    }catch (err){
        res.status(500).send(err);
    }
});



module.exports = router;
