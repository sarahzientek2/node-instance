const Dog = require('../models/dog')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId;
module.exports.getAll = async function(req, res) {
    try {
      let dogs = await Dog.find({user: new ObjectId(req.params.userId)})
      res.json({data: dogs})
    } catch (error) {
      res.json({error: error})
    }
}

module.exports.getOne = async function(req, res) {
  try {
    let dog = await Dog.findOne({user: new ObjectId(req.params.userId), _id: new ObjectId(req.params.dogId)})
    res.json({data: dog})
  } catch (error) {
    res.end({error: error})
  }
}

module.exports.create = async function(req, res) {
        try {
  let dog = new Dog(req.body)
  let newDog = await dog.save()
  res.statusCode = 201
  res.json({data: {id: newDog._id, message: "Created ok"}})
      } catch (error) {
        console.log(error)
        res.end({error: error})
    }
}