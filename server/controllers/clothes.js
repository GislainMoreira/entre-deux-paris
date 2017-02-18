const Clothes = require('../models/cloth');

module.exports.getClothes = (req, res) => {
  Clothes.getClothes(function (err, clothes) {
    if (err) {
      throw err;
    }
    res.status(200).json(clothes);
  });
};

module.exports.getCloth = (req, res) => {
  Clothes.getClothById(req.params.id, function(err, clothes) {
    if(err){ throw err; }
    res.status(200).json(clothes);
  });
};

module.exports.postCloth = (req, res) => {
  res.status(200).json("post clothe");
};

module.exports.putCloth = (req, res) => {
  res.status(200).json("put clothe");
};

module.exports.deleteCloth = (req, res) => {
  res.status(200).json("delete clothe");
};