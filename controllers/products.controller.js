const Product = require('../models/product')

exports.getAll = async function(req, res) { 
    let products = await Product.find()
    res.json({data: products});
}

module.exports.create = async function(req, res) {
    let product = newProduct(req.body)
    let newProduct = await product.save()
    res.statusCode = 201
    res.json({data:{id: newProduct._id, message: "Created ok"}})
    }
