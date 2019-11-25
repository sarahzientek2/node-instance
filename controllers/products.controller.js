const model = require('../models/product')

exports.getAll = function(req, res) { 
    let products = await Product.find()
    res.json({data: products});
}
