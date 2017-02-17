const router = require('express').Router();
const clothes = require('./clothes');
const coats = require('./coats');
const dresses = require('./dresses');
const jackets = require('./jackets');
const shirts = require('./shirts');

router.use('/clothes', clothes);
router.use('/coats', coats);
router.use('/dresses', dresses);
router.use('/jackets', jackets);
router.use('/shirts', shirts);

module.exports = router;