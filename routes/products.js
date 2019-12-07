var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

/* GET product listing. */
router.get('/:userId/products', controller.getAll)
router.get('/:productId', controller.getOne)
router.post ('/', controller.create)


module.exports = router;
