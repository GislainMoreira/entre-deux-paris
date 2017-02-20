const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../config');

const generateToken = (user) => {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080
  });
};

const setUserInfo = (request) => {
  return {
    _id: request._id,
    login: request.login
  };
};

module.exports.login = (req, res, next) => {

  let userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: 'JWT ' + generateToken(userInfo),
    user: userInfo
  });
};
