var express = require('express');
var router = express.Router();

const controller = require('../controllers/courses.controller')

/* GET courses listing. */
router.get('/:courseId/courses', controller.getAll)
router.get('/:courseId/courses', controller.getOne)
router.post ('/:courseId/courses', controller.create)

module.exports = router;
