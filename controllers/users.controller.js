const User = require('../models/user')

exports.getAll = async function(req, res) { 
    let users = await User.find()
    res.json({data: users});
}