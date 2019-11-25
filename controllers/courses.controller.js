const model = require('../models/course')

exports.getAll = function(req, res) { 
    let products = model.getAllCourses()
    res.statusCode = 200
    res.json({data: courses});
}

exports.getOne = function(req, res) { 
    let course = model.getOneCourse(req.params.courseId)
    res.statusCode = 200
    res.json({data: course});
}