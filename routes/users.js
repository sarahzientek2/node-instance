var express = require('express');
var router = express.Router();

const controller = require('../controllers/users.controller')

/* GET users listing. */
router.get('/:userId/users', controller.getAll)
router.get('/:userId/users', controller.getOne)
router.post ('/users', controller.create)

module.exports = router;
