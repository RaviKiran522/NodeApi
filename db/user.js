const mongoose = require('mongoose');

const user = mongoose.Schema({
  firstname: String,
  lastname: String,
});

module.exports = User = mongoose.model('user', user);
