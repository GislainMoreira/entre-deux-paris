const router = require('express').Router();
const coats = require('./coats');
const collars = require('./collars');
const Clothe = require('../../models/clothe');

router.use('/coats', coats);
router.use('/collars', collars);

router.get('/', (req, res) => {
  Clothe.getCoats(function(err, coats) {
    if(err){ throw err; }
    res.status(200).json(coats);
  });
});

module.exports = router;