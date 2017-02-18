const router = require('express').Router();
const bottoms = require('./bottoms');
const tops = require('./tops');
const controller = require('../../controllers/shirts');

router.use('/bottoms', bottoms);
router.use('/tops', tops);

router.get('/', controller.getShirts);

module.exports = router;