const mongoose = require('mongoose');

const admin = mongoose.Schema({
  firstname: String,
  lastname: String,
  mobile: Number,
  course: String
});

module.exports = User = mongoose.model('Admin', admin);
