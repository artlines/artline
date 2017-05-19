var db = require('../db');

module.exports.create = function(data, done) {
  db.get().query('INSERT INTO users SET ?', [data], function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  })
};

module.exports.getAll = function(done) {
  db.get().query('SELECT * FROM users WHERE is_active=?', db.config.USER_ACTIVE, function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  })
};
