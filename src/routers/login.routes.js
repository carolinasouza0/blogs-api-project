const { Router } = require('express');

const loginController = require('../controllers/loginController');

const validateLogin = require('../middlewares/validateLogin');

const router = Router();

router.post('/', validateLogin, loginController.loginController);

module.exports = router;