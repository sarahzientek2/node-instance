constmongoose = require('mongoose')
const productSchema = new mongoose.Schema({
     name: String})
     
     
     module.exports = mongoose.model('User', userSchema);