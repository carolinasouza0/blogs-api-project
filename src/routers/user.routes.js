const { Router } = require('express');

const userController = require('../controllers/userController');

const validateUser = require('../middlewares/validateUser');
const { validate } = require('../middlewares/validateToken');

const router = Router();

router.post('/', validateUser, userController.createUser);
router.get('/', validate, userController.getAllUsers);
router.get('/:id', validate, userController.getUserById);
router.delete('/me', validate, userController.deleteUser);

module.exports = router;