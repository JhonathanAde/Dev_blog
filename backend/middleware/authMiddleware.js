const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {

  let token;

  // 1.) Check to see if token exists in the header
  // Note: Usually the token is in the request headers, in authorization and starts with the word 'Bearer'
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      try {

        token = req.headers.authorization.split(' ')[1];

        let decoded = jwt.verify(token, process.env.JWT_SECRET);

        let user = await User.findById(decoded.id);

        req.user = {
          id: user.id,
          username: user.username,
        };

        next();
        
      } catch(error) {
        res.status(401);
        throw new Error('Not Authorized');
      }
    }

    if(!token){
      res.status(401);
      throw new Error('Not Authorized – No Token');
    }

});

module.exports = {
  protect,
}

