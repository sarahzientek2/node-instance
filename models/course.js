const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    _id: String,
  name: String,
  professor: String
})

module.exports = mongoose.model('Course', courseSchema);