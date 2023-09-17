const express = require('express');
const router = express.Router();

const { createBlog, getABlog, getAllBlogs, getLatestBlogs } = require('../controllers/blog.controller')

router.get('/blogs', getAllBlogs)

router.get('/blog/:slug', getABlog)

router.get('/latest', getLatestBlogs)

router.post('/blog',createBlog)

module.exports = router;