var express = require('express');
var router = express.Router();
var users = require('../models/users');
var util = require('util');

/* GET users listing. */
router.get('/', (req, res, next) => {
  users.getAll((err, result) => {
    if(err) console.log(err);
    res.render('users', {title: 'Yeah, artline, your session_id = ' +req.session.id, users: result});
  });
});

router.post('/create', (req, res, next) => {
  if (!req.body) res.send('create user failed!');
  users.create(req.body, (err, result) => {
    if(err) console.log(err);
    res.send('user created with id: ' + result);
  });
});

router.get('/get/:id', (req, res, next) => {
  users.getById(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.render('user_one', {title: 'Edit user', user: result});
  });
});
router.get('/delete/:id', (req, res, next) => {
  users.delete(req.params.id, (err, result) => {
    if(err) console.log(err);
    res.redirect('/users');
  });
});

router.post('/edit/:id', (req, res, next) => {
  users.edit(req.body, req.params.id, (err, result) => {
    if(err) console.log(err);
    res.send('user edited!'+util.inspect(result));
  });
});

module.exports = router;
