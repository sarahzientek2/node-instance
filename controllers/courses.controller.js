const Course = require('../models/course')

exports.getAll = async function(req, res) { 
    let courses = await Course.find()
    res.json({data: courses});
}

module.exports.create = async function(req, res) {
    let course = newCourse(req.body)
    let newCourse = await course.save()
    res.statusCode = 201
    res.json({data:{id: newProduct._id, message: "Created ok"}})
    }