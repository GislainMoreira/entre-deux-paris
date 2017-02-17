const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/entre-deux-paris', function(err) {
  if (err) {
    throw err;
  }
});

const userSchema = new mongoose.Schema({
  login: { type : String , unique : true, required : true, dropDups: true },
  password: { required: true, type: String }
});

userSchema.statics.loginValid = function(login, password, callback){
  return this.find({ login, password }, callback);
};

module.exports = mongoose.model('User', userSchema);
