var express = require('express');
var router = express.Router();

const controller = require('../controllers/dogs.controller')

router.get('/:userId/dogs/', controller.getAll)
router.get('/:userId/dogs/:dogId', controller.getOne)
router.post('/:userId/dogs/', controller.create)

module.exports = router;
