const model = require('../models/course')

exports.getAll = function(req, res) { 
    let products = model.getAllCourses()
    res.statusCode = 200
    res.json({data: users});
}

exports.getOne = function(req, res) { 
    let product = model.getOneCourse(req.params.productId)
    res.statusCode = 200
    res.json({data: user});
}