var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getAll(function (err, result) {
    res.render('users', {title: 'Yeah, artline', users: result});
  });
});

module.exports = router;
