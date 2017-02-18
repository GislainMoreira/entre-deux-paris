const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

mongoose.createConnection('mongodb://localhost/entre-deux-paris', function(err) {
  if (err) {
    throw err;
  }
});

const userSchema = new mongoose.Schema({
  login: { type : String , unique : true, required : true, dropDups: true },
  password: { required: true, type: String }
});

userSchema.pre('save', function(callback) {
  const user = this;

  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

userSchema.methods.verifyPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
