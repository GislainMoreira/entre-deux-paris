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
  res.status(200).json("post cloth");
};

module.exports.putCloth = (req, res) => {
  res.status(200).json("put cloth");
};

module.exports.deleteCloth = (req, res) => {
  res.status(200).json("delete cloth");
};