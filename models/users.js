var path = require('path');
var connection = require('./config');
var table = path.basename(__filename, '.js');

var getColumnsName = function () {
  connection.query(
    'SELECT column_name ' +
    'FROM information_schema.columns ' +
    'WHERE table_schema = ?' +
    'AND table_name = ?',
    [connection.db, table],
    function (error, result, fields) {
      if (error) throw error;
      return result;
    }
  );
}

exports.edit = function (data) {
  //if (data.id)
}


exports.getAll = function () {
  connection.query(
    'SELECT * FROM users',
    function (error, result, fields) {
      if (error) throw error;
      return result;
     /* result.columnsName = getColumnsName(function (result) {
        if (result) connection.end();
      });*/
    }
  );
  connection.end();
}

exports.getById = function (id) {

}

exports.delete = function (id) {

}