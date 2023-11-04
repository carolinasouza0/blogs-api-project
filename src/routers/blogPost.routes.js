const { Router } = require('express');

const blogPostController = require('../controllers/blogPostController');
const { validate } = require('../middlewares/validateToken');
const { validatePost, validatePostUpdate } = require('../middlewares/validateBlogPost');

const router = Router();

router.get('/search', validate, blogPostController.searchPosts);
router.post('/', validate, validatePost, blogPostController.createPost);
router.get('/', validate, blogPostController.getAllPosts);
router.get('/:id', validate, blogPostController.getPostById);
router.put('/:id', validate, validatePostUpdate, blogPostController.updatePost);
router.delete('/:id', validate, blogPostController.deletePost);

module.exports = router;