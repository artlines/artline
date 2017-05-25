var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Yeah, artline'+JSON.stringify(req.session.id)});
});

module.exports = router;
