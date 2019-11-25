const User = require('../models/user')

exports.getAll = async function(req, res) { 
    let users = await User.find()
    res.json({data: users});
}

module.exports.create = async function(req, res) {
    let user = newUser(req.body)
    let newUser = await user.save()
    res.statusCode = 201
    res.json({data:{id: newUser._id, message: "Created ok"}})
    }