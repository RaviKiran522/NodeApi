const mongoose = require('mongoose');

const admin = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'please enter first name']
  },
  lastname: {
    type: String,
    required: [true, 'please enter last name']
  },
  mobile: {
    type: String,
    required: [true, 'please enter mobile number']
  },
  course: {
    type: String,
    required: [true, 'please enter course']
  }
});

module.exports = User = mongoose.model('Admin', admin);
