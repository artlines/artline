var users = require('../models/users');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', users: users.result });
});

module.exports = router;
