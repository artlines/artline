var express = require('express');
var router = express.Router();
var users = require('../models/users');
var util = require('util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getAll(function (err, result) {
    if(err) console.log(err);
    res.render('users', {title: 'Yeah, artline', users: result});
  });
});

router.post('/create', function(req, res, next) {
  users.create(req.body, function (err, result) {
    if(err) console.log(err);
    res.send('user created!'+util.inspect(result));
  });
});

module.exports = router;
