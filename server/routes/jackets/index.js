const router = require('express').Router();
const bottoms = require('./bottoms');
const tops = require('./tops');
const Clothe = require('../../models/clothe');

router.use('/bottoms', bottoms);
router.use('/tops', tops);

router.get('/', (req, res) => {
  Clothe.getJackets(function(err, jackets) {
    if(err){ throw err; }
    res.status(200).json(jackets);
  });
});

module.exports = router;