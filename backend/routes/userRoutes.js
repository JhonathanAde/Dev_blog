const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post (registerUser)
  .get(protect, getMe)

router.route('/login')
  .post(loginUser)


module.exports = router;