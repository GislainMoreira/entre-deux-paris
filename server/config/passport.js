const passport = require('passport');
const User = require('../models/user');
const config = require('./index');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const localOptions = { usernameField: 'login' };

const localLogin = new LocalStrategy(localOptions, (login, password, callback) => {
  User.findOne({ login }, (err, user) => {
    if(err) { return callback(err); }
    if(!user) { return callback(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    user.verifyPassword(password, (err, isMatch) => {
      if (err) { return callback(err); }
      if (!isMatch) {
        return callback(null, false, { error: "Your login details could not be verified. Please try again." });
      }

      return callback(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, callback) => {
  console.log(payload);
  User.findById(payload._id, function(err, user) {
    if (err) { return callback(err, false); }

    (user) ? callback(null, user) : callback(null, false);
  });
});

passport.use(jwtLogin);
passport.use(localLogin);

module.exports.requireAuth = passport.authenticate('jwt', { session: false });
module.exports = passport;