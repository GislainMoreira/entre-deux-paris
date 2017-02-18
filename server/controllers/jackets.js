const Cloth = require('../models/cloth');

module.exports.getJacketsBottoms = (req, res) => {
  Cloth.getJacketsBottoms(function(err, jackets) {
    if(err){ throw err; }
    res.status(200).json(jackets);
  });
};

module.exports.getJacketsTops = (req, res) => {
  Cloth.getJacketsTops(function(err, jackets) {
    if(err){ throw err; }
    res.status(200).json(jackets);
  });
};

module.exports.getJackets = (req, res) => {
  Cloth.getJackets(function(err, jackets) {
    if(err){ throw err; }
    res.status(200).json(jackets);
  });
};