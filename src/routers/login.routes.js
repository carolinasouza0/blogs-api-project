const { Router } = require('express');

const router = Router();
const loginController = require('../controllers/loginController');

const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, loginController.loginController);

module.exports = router;