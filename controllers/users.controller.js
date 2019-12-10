const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.getAll = async function(req, res) {
    try {
      let users = await User.find()
      res.json({data: users})
    } catch (error) {
      res.json({error: error})
    }
}

module.exports.getOne = async function(req, res) {
  try {
    let user = await User.findOne()
    res.json({data: user})
  } catch (error) {
    res.end({error: error})
  }
}

module.exports.create = async function(req, res) {
        try {
  let user = new User(req.body)
  let newUser = await user.save()
  res.statusCode = 201
  res.json({data: {id: newUser._id, message: "Created ok"}})
      } catch (error) {
        console.log(error)
        res.end({error: error})
    }
}