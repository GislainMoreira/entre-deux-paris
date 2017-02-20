const router = require('express').Router();
const controller = require('../../controllers/auth');
const passport = require('../../config/passport');

router.post('/login',passport.authenticate('local', { session: false }), controller.login);

module.exports = router;