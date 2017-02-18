const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/entre-deux-paris', function(err) {
  if (err) {
    throw err;
  }
});

const clothSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: { regular: Number, discount: Number },
  sizes: [{size: Number, quantity: Number}],
  textiles: [{type: String, percent: Number}],
  workshop: String,
  isLimited: Boolean,
  thumbnail: String,
  carousel: [String],
  color: [String],
  firstType: String,
  subType: String,
  tags: [String],

});

// Static methods for general clothes
clothSchema.statics.getClothes = function (callback) {
  return this.find({}, callback);
};

clothSchema.statics.getClothById = function(id, callback){
  return this.find({ id }, callback);
};

// Static methods for coats
clothSchema.statics.getCoats = function(callback){
  return this.find({ firstType : 'coat' }, callback);
};

clothSchema.statics.getCoatsCoats = function(callback){
  return this.find({ firstType : 'coat', subType: 'coat' }, callback);
};

clothSchema.statics.getCoatsCollars = function(callback){
  return this.find({ firstType : 'coat', subType: 'collar' }, callback);
};

// Static methods for dresses
clothSchema.statics.getDresses = function(callback){
  return this.find({ firstType : 'dress' }, callback);
};

clothSchema.statics.getDressesTops = function(callback){
  return this.find({ firstType : 'dress', subType: 'top' }, callback);
};

clothSchema.statics.getDressesBottoms = function(callback){
  return this.find({ firstType : 'dress', subType: 'bottom' }, callback);
};

// Static methods for jackets
clothSchema.statics.getJackets = function(callback){
  return this.find({ firstType : 'jacket' }, callback);
};

clothSchema.statics.getJacketsTops = function(callback){
  return this.find({ firstType : 'jacket', subType: 'top' }, callback);
};

clothSchema.statics.getJacketsBottoms = function(callback){
  return this.find({ firstType : 'jacket', subType: 'bottom' }, callback);
};

// Static methods for shirts
clothSchema.statics.getShirts = function(callback){
  return this.find({ firstType : 'shirt' }, callback);
};

clothSchema.statics.getShirtsTops = function(callback){
  return this.find({ firstType : 'shirt', subType: 'top' }, callback);
};

clothSchema.statics.getShirtsBottoms = function(callback){
  return this.find({ firstType : 'shirt', subType: 'bottom' }, callback);
};

module.exports = mongoose.model('Cloth', clothSchema);