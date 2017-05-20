var db = require('../db');

module.exports.create = function(data, done) {
  db.get().query('INSERT INTO users SET ?', [data], function(err, result) {
    if (err) return done(err);
    done(null, result.insertId)
  });
};

module.exports.getAll = function(done) {
  db.get().query('SELECT * FROM users WHERE is_active=?', db.config.USER_ACTIVE, function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.getById = function(userId, done) {
  db.get().query('SELECT * FROM users WHERE id=?', userId, function (err, rows) {
    if (err) return done(err);
    done(null, rows[0]);
  });
};

module.exports.edit = function(data, userId, done) {
  db.get().query('UPDATE USERS SET ? WHERE id = ?', [data, userId], function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.delete = function(userId, done) {
  db.get().query('DELETE FROM USERS WHERE id = ?', [userId], function (err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};