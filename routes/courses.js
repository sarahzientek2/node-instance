var express = require('express');
var router = express.Router();

const controller = require('../controllers/courses.controller')

/* GET courses listing. */
router.get('/', controller.getAll)
router.get('/:courseId/courses', controller.getOne)
router.post ('/', controller.create)

module.exports = router;
