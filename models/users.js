var connection = require('./config');
var data = {};
connection.query(
  'SELECT * FROM users',
  function (error, result, fields) {
    if (error) throw error;
    data.result = result;
  }
);
connection.end();

module.exports = data;