const Course = require('../models/course')

exports.getAll = async function(req, res) { 
    let courses = await Course.find()
    console.log(JSON.stringify(courses))
    res.json({data: courses});

}

exports.getOne = async function(req, res) { 
    let courses = await Course.find()
    res.json({data: courses});
}

module.exports.create = async function(req, res) {
    let course = new Course(req.body)
    let newCourse = await course.save()
    res.statusCode = 201
    res.json({data:{id: newCourse._id, message: "Created ok"}})
    }
    
    exports.init = async function() {
    try {
        await mongoose.connect(env.db, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        console.log(error)
    }
}