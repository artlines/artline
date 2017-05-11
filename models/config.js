var mysql = require('mysql');
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