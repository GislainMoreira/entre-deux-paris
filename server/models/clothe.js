const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/entre-deux-paris', function(err) {
  if (err) {
    throw err;
  }
});

const clotheSchema = new mongoose.Schema({
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
clotheSchema.statics.getClothes = function (callback) {
  return this.find({}, callback);
};

clotheSchema.statics.getClotheById = function(id, callback){
  return this.find({ id }, callback);
};

// Static methods for coats
clotheSchema.statics.getCoats = function(callback){
  return this.find({ firstType : 'coat' }, callback);
};

clotheSchema.statics.getCoatsCoats = function(callback){
  return this.find({ firstType : 'coat', subType: 'coat' }, callback);
};

clotheSchema.statics.getCoatsCollars = function(callback){
  return this.find({ firstType : 'coat', subType: 'collar' }, callback);
};

// Static methods for dresses
clotheSchema.statics.getDresses = function(callback){
  return this.find({ firstType : 'dress' }, callback);
};

clotheSchema.statics.getDressesTops = function(callback){
  return this.find({ firstType : 'dress', subType: 'top' }, callback);
};

clotheSchema.statics.getDressesBottoms = function(callback){
  return this.find({ firstType : 'dress', subType: 'bottom' }, callback);
};

// Static methods for jackets
clotheSchema.statics.getJackets = function(callback){
  return this.find({ firstType : 'jacket' }, callback);
};

clotheSchema.statics.getJacketsTops = function(callback){
  return this.find({ firstType : 'jacket', subType: 'top' }, callback);
};

clotheSchema.statics.getJacketsBottoms = function(callback){
  return this.find({ firstType : 'jacket', subType: 'bottom' }, callback);
};

// Static methods for shirts
clotheSchema.statics.getShirts = function(callback){
  return this.find({ firstType : 'shirt' }, callback);
};

clotheSchema.statics.getShirtsTops = function(callback){
  return this.find({ firstType : 'shirt', subType: 'top' }, callback);
};

clotheSchema.statics.getShirtsBottoms = function(callback){
  return this.find({ firstType : 'shirt', subType: 'bottom' }, callback);
};

module.exports = mongoose.model('Clothe', clotheSchema);