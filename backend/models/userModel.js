const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please enter a valid username']
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password']
  },
  // posts: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Post'
  // }
});

module.exports = mongoose.model('User', userModel);