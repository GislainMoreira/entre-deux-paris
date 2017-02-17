const router = require('express').Router();
const Clothe = require('../../models/clothe');

router.get('/', (req, res) => {
  Clothe.getJacketsBottoms(function(err, jackets) {
    if(err){ throw err; }
    res.status(200).json(jackets);
  });
});

module.exports = router;