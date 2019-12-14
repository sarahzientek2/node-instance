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


//SUBMITS A USER
router.post('/', async (req,res) => {
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
