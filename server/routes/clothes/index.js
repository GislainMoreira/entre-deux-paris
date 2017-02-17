const router = require('express').Router();
const Clothe = require('../../models/clothe');

router.get('/', (req, res) => {
  Clothe.getClothes(function(err, clothes) {
    if(err){ throw err; }
    res.status(200).json(clothes);
  });
});

router.get('/:id', (req, res) => {
  Clothe.getClotheById(req.params.id, function(err, clothes) {
    if(err){ throw err; }
    res.status(200).json(clothes);
  });
});

router.post('/', (req, res) => {
  res.status(200).json("add new clothe");
});

router.put('/:id', (req, res) => {
  res.status(200).json("modify clothe");
});

router.delete('/:id', (req, res) => {
  res.status(200).json("delete clothe");
});

module.exports = router;