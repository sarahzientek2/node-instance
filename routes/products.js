var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

/* GET product listing. */
router.get('/:productId/products', controller.getAll)
router.get('/:productId/products', controller.getOne)
router.post ('/products', controller.create)


module.exports = router;
