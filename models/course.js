const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
     name: String})
     
     
     module.exports = mongoose.model('Course', courseSchema);