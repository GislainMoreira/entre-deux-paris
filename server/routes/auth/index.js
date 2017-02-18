const router = require('express').Router();
const User = require('../../models/user');

router.post('/', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  User.findOne({ login }, function (err, user) {
    if (err) { return res.status(200).send(false); }

    // No user found with that username
    if (!user || user == null) { res.status(200).send(false); }

    // Make sure the password is correct
    user.verifyPassword(password, function(err, isMatch) {
      if (err) { res.status(200).send(false); }

      // Password did not match
      if (!isMatch) { res.status(200).send(false); }

      // Success
      res.status(200).send(true);
    });
  });

});

module.exports = router;