const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware')

const { createBlog, getABlog, getAllBlogs, getLatestBlogs, auth } = require('../controllers/blog.controller')

router.post('/auth', auth)

router.get('/blogs', getAllBlogs)

router.get('/blog/:slug', getABlog)

router.get('/latest', getLatestBlogs)

router.post('/blog', authenticate, createBlog)

module.exports = router;