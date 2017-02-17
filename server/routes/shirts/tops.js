const router = require('express').Router();
const Clothe = require('../../models/clothe');

router.get('/', (req, res) => {
  Clothe.getShirtsTops(function(err, shirts) {
    if(err){ throw err; }
    res.status(200).json(shirts);
  });
});

module.exports = router;