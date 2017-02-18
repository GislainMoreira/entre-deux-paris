const Cloth = require('../models/cloth');

module.exports.getCoatsCollars = (req, res) => {
  Cloth.getCoatsCollars(function(err, coats) {
    if(err){ throw err; }
    res.status(200).json(coats);
  });
};

module.exports.getCoatsCoats = (req, res) => {
  Cloth.getCoatsCoats(function(err, coats) {
    if(err){ throw err; }
    res.status(200).json(coats);
  });
};

module.exports.getCoats = (req, res) => {
  Clothe.getCoats(function(err, coats) {
    if(err){ throw err; }
    res.status(200).json(coats);
  });
};