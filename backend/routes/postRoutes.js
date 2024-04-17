const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

const {getPosts, createPosts} = require('../controllers/postControllers');

router.route('/')
  .get(protect, getPosts)
  .post(protect, createPosts)


module.exports = router;