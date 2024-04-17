const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // },

  content: {
    type: String,
    required: [true, 'Please enter some form of content'],
  },

  // comments: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: 'Comment',
  // },

  // likes: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: 'Like',
  // },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);