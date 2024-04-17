const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const registerUser = asyncHandler(async (req, res) => {
 const {
    username,
    email,
    password
 } = req.body;

 if(!username || !email || !password){
    res.status(400);
    throw new Error('Please fill all fields');
 }

 // Check to see if user already exists

 const userExists = await User.findOne({ email });

 if(userExists){
    res.status(400);
    throw new Error('This email is already being used');
 }

 // Hash the password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password, salt);

 // Create the user
 const user = await User.create({
  username,
  email,
  password: hashedPassword,
 });

 if(user){
  res.status(200).json({
    _id: user.id,
    username: user.username,
    email: user.email,
    token: generateToken(user.id)
  });
 } else {
  res.status(400);
  throw new Error('user was not created – invalid user');
 }
});

const loginUser = asyncHandler( async (req, res) => {
  const {
    email,
    password
  } = req.body;

  if(!email || !password){
    res.status(400);
    throw new Error('Please fill all fields');
  }

  const user = await User.findOne({ email });

  if(user && (await bcrypt.compare(password, user.password))){
    res.status(200).json({
      _id: user.id,
      username: user.username,
      token: generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
}); 

const getMe = asyncHandler((req, res) => {
  console.log(req.user);

  res.status(200).json({
    message: 'get user info'
  })
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '10d'
  });
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}