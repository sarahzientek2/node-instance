var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET products */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users. */
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET courses. */
router.get('/courses', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
