const model = require('../models/user')

exports.getAll = function(req, res) { 
    let products = model.getAllUsers()
    res.statusCode = 200
    res.json({data: users});
}

exports.getOne = function(req, res) { 
    let product = model.getOneUser(req.params.userId)
    res.statusCode = 200
    res.json({data: user});
}