var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('./product/index', { title: 'Product index page' });
});

router.get('/product/insert', function(req, res, next) {
  res.render('./product/insert', { title: 'Product insert page' });
});

router.get('/product/edit', function(req, res, next) {
  res.render('./product/edit', { title: 'Product edit page' });
});

module.exports = router;
