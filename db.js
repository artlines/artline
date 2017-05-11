var mysql = require('mysql');
var PRODUCTION_DB = 'artline';
var TEST_DB = 'test_artline';
var state = {
  pool: null,
  mode: null
}

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '91059785',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  });

  state.mode = mode;
  done();
}

exports.get = function() {
  return state.pool;
}