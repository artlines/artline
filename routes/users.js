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

router.all('/create', function(req, res, next) {
  console.log(req.body);
  users.create(req.body, function (err, result) {
    if(err) console.log(err);
    res.send('user created!'+util.inspect(result));
  });
});

router.get('/get/:id', function(req, res, next) {
  users.getById(req.params.id, function (err, result) {
    if(err) console.log(err);
    res.render('user_one', {title: 'Edit user', user: result});
  });
});
router.get('/delete/:id', function(req, res, next) {
  users.delete(req.params.id, function (err, result) {
    if(err) console.log(err);
    res.redirect('/users');
  });
});

router.post('/edit/:id', function(req, res, next) {
  users.edit(req.body, req.params.id, function (err, result) {
    if(err) console.log(err);
    res.send('user edited!'+util.inspect(result));
  });
});

module.exports = router;
