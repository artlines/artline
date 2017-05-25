var db = require('../db');

module.exports.create = (data, done) => {
  db.get().query('INSERT INTO users SET ?', [data], (err, result) => {
    if (err) return done(err);
    done(null, result.insertId)
  });
};

module.exports.getAll = (done) => {
  db.get().query('SELECT * FROM users WHERE is_active=?', db.config.USER_ACTIVE, (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.getById = (userId, done) => {
  db.get().query('SELECT * FROM users WHERE id=?', userId, (err, rows) => {
    if (err) return done(err);
    done(null, rows[0]);
  });
};

module.exports.edit = (data, userId, done) => {
  db.get().query('UPDATE USERS SET ? WHERE id = ?', [data, userId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};

module.exports.delete = (userId, done) => {
  db.get().query('DELETE FROM USERS WHERE id = ?', [userId], (err, rows) => {
    if (err) return done(err);
    done(null, rows);
  });
};