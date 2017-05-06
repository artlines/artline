var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'artline'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected as id ' + connection.threadId);
});

module.exports = connection;