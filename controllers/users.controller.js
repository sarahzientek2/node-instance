const User = require('../models/user')
constObjectId = require('mongoose').Types.ObjectId;

module.exports.getAll = async function(req, res) { 
    let users = await User.find()
    console.log(JSON.stringify(users))
    res.json({data: users});
}

module.exports.getOne = async function(req, res) { 
    let users = await User.find()
    res.json({data: users});
}


module.exports.create = async function(req, res) {
    let user = new User(req.body)
    let newUser = await user.save()
    res.statusCode = 201
    res.json({data:{id: newUser._id, message: "Created ok"}})
    }

    exports.init = async function() {
    try {
        await mongoose.connect(env.db, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        console.log(error)
    }
}