var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

/* GET product listing. */
router.get('/', controller.getAllProducts)
router.get('/:productId', controller.getOneProduct)

module.exports = router;
