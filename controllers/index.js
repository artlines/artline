var users = require('../models/users');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  users.getAll(function (err, usersData) {
    res.render('index', { title: 'Express', users: usersData});
  });
});

module.exports = router;
