const Course = require('../models/course')

exports.getAll = async function(req, res) { 
    let courses = await Course.find()
    res.json({data: courses});
}