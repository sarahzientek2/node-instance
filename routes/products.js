var express = require('express');
var router = express.Router();

const controller = require('../controllers/products.controller')

/* GET products listing. */ 
router.get('/', controller.get) 
  
module.exports = router;
