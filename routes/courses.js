var express = require('express');
var router = express.Router();

const controller = require('../controllers/courses.controller')

/* GET users listing. */
router.get('/', controller.getAll)
router.get('/:courseId', controller.getOne)
router.post ('/', controller.create)


module.exports = router;
