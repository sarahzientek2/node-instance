const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  age: String,
  password: String
})

module.exports = mongoose.model('User', userSchema);