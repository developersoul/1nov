var mongoose = require('mongoose');

var guestSchema = mongoose.Schema({
  names: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Guest', guestSchema);
