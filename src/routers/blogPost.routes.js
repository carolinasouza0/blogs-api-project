const { Router } = require('express');

const blogPostController = require('../controllers/blogPostController');
const { validate } = require('../middlewares/validateToken');
const validateBlogPost = require('../middlewares/validateBlogPost');

const router = Router();

router.post('/', validate, validateBlogPost, blogPostController.createPost);
router.get('/', validate, blogPostController.getAllPosts);

module.exports = router;