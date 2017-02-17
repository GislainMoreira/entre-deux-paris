const router = require('express').Router();
const Clothe = require('../../models/clothe');

router.get('/', (req, res) => {
  Clothe.getCoatsCollars(function(err, coats) {
    if(err){ throw err; }
    res.status(200).json(coats);
  });
});

module.exports = router;