const Cloth = require('../models/cloth');

module.exports.getShirtsBottoms = (req, res) => {
  Cloth.getShirtsBottoms(function(err, shirts) {
    if(err){ throw err; }
    res.status(200).json(shirts);
  });
};

module.exports.getShirtsTops = (req, res) => {
  Clothe.getShirtsTops(function(err, shirts) {
    if(err){ throw err; }
    res.status(200).json(shirts);
  });
};

module.exports.getShirts = (req, res) => {
  Clothe.getShirts(function(err, shirts) {
    if(err){ throw err; }
    res.status(200).json(shirts);
  });
};