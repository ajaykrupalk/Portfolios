const express = require('express');
const router = express.Router();

const { createBlog, getABlog, getAllBlogs } = require('../controllers/blog.controller')

router.get('/blogs', getAllBlogs)

router.get('/blog/:slug', getABlog)

router.post('/blog',createBlog)

module.exports = router;