const router = require('express').Router();
const bottoms = require('./bottoms');
const tops = require('./tops');
const controller = require('../../controllers/jackets');

router.use('/bottoms', bottoms);
router.use('/tops', tops);

router.get('/', controller.getJackets)

module.exports = router;