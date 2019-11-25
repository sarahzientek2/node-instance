const model = require('../models/course')

exports.getAll = function(req, res) { 
    let courses = await Course.find()
    res.json({data: courses});
}