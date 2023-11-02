const { Router } = require('express');

const router = Router();
const categoryController = require('../controllers/categoryController');
const validateCategory = require('../middlewares/validateCategory');

const { validate } = require('../middlewares/validateToken');

router.post('/', validate, validateCategory, categoryController.createCategory);

module.exports = router;