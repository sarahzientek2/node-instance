const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  name: String,
  professor: String
})

module.exports = mongoose.model('User', courseSchema);