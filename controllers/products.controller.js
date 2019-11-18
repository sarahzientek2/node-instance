 const model = require('../models/product')

exports.get = function(req, res) { 
    let products = model.getAllProducts()
    res.statusCode = 200
    res.json({data: products});

}
