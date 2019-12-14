const express = require('express');
const router = express.Router();
const User = require('../models/User');


//GETS ALL USERS
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }
});


//login
router.post('/login', async (req,res)=>{
    console.log(req.body)
    
    let email= req.body.email;
    let password = req.body.password
    let user = await User.find({email:email})
    if(user){
        if(user.password==password && user.email==email){
            res.json({data:{message:"Succesfully logged in",userId:user._id,username:user.username}})
        }
        else{
            res.json({data:{message:"Wrong email or/and password"}})

        }
        
    }
    

})

//SUBMITS A USER
router.post('/', async (req,res) => {
    console.log(req.body)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
    res.json({message: err});
}
    
});

//GET SPECIFIC USER
router.get('/:userId', async (req,res) => {
    try{
    const user = await User.findById(req.params.userId);
    res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE SPECIFIC USER
router.delete('/:userId', async (req,res) => {
    try{
        const removedPost = await User.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;
