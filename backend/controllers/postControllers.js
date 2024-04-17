const Post = require('../models/postModel');

const getPosts = (req, res) => {
  res.status(200).json({ message: 'Get Tasks'});
}

const createPosts = async (req, res) => {


  if(!req.body.content){
    res.status(400);
    throw new Error('Please add a text field')
  }


  const post = await Post.create({
    content: req.body.content,
  });

  res.status(200).json({ post });
};

module.exports = {
  getPosts,
  createPosts
}