var db = require('../db');

exports.create = function(userId, text, done) {
  var values = [userId, text, new Date().toISOString()]

  db.get().query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  })
}

exports.getAll = function(done) {
  db.get().query('SELECT * FROM users', function (err, rows) {
    if (err) return done(err);
    done(null, rows)
  })
}
