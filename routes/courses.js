var express = require('express');
var router = express.Router();

const controller = require('../controllers/courses.controller')

/* GET users listing. */
router.get('/', controller.getAllCourses)
router.get('/:userId', controller.getOneCourse)

module.exports = router;
