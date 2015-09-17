var mongoose = require('mongoose');

var guestSchema = mongoose.Schema({
  names: String,
  email: String,
  phone: String,
  comment: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Guest', guestSchema);
