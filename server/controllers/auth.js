const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../models/user');

passport.use(new BasicStrategy(
  (login, password, callback) => {
    User.findOne({ login }, function (err, user) {
      if (err) { return callback(err); }
      if (!user || user == null) { return callback(null, false); }

      user.verifyPassword(password, function(err, isMatch) {
        if (err) { return callback(err); }
        console.log('test');

        if (!isMatch) { return callback(null, false); }

        return callback(null, user);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', { session : false });