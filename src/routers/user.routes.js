const { Router } = require('express');

const userController = require('../controllers/userController');

const validateUser = require('../middlewares/validateUser');

const router = Router();

router.post('/', validateUser, userController.createUser);

module.exports = router;