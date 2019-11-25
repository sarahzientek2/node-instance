const model = require('../models/user')

exports.getAll = function(req, res) { 
    let users = await User.find()
    res.json({data: users});
}