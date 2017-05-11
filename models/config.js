var mysql = require('mysql');
<<<<<<< HEAD

var PRODUCTION_DB = 'artline';
var TEST_DB = 'test_artline';

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
  pool: null,
  mode: null
}

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '91059785',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  });

  state.mode = mode;
  done()
}

exports.get = function() {
  return state.pool
}
=======
var db = 'artline';
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: db
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected as id ' + connection.threadId);
});

connection.db = db;

module.exports = connection;
>>>>>>> 8fb300891ec25c4a5570500309f4edd4660a5c97
