var express = require('express');
var router = express.Router();

const controller = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', controller.getAllUsers)
router.get('/:userId', controller.getOneUser)

module.exports = router;
