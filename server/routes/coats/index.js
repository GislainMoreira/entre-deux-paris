const router = require('express').Router();
const coats = require('./coats');
const collars = require('./collars');
const controller = require('../../controllers/coats');

router.use('/coats', coats);
router.use('/collars', collars);

router.get('/', controller.getCoats);

module.exports = router;