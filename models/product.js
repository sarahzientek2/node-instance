const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
_id: String,
  name: String
})

module.exports = mongoose.model('Product', productSchema);