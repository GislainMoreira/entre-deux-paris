const router = require('express').Router();
const Clothe = require('../../models/clothe');

router.get('/', (req, res) => {
  Clothe.getDressestops(function(err, dresses) {
    if(err){ throw err; }
    res.status(200).json(dresses);
  });
});

module.exports = router;