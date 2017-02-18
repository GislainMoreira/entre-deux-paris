const Cloth = require('../models/cloth');

module.exports.getDressesBottoms = (req, res) => {
  Cloth.getDressesBottoms(function(err, dresses) {
    if(err){ throw err; }
    res.status(200).json(dresses);
  });
};

module.exports.getDressesTops = (req, res) => {
  Cloth.getDressestops(function(err, dresses) {
    if(err){ throw err; }
    res.status(200).json(dresses);
  });
};

module.exports.getDresses = (req, res) => {
  Clothe.getDresses(function(err, dresses) {
    if(err){ throw err; }
    res.status(200).json(dresses);
  });
};