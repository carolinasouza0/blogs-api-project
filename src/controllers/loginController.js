const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService.login(email, password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const { password: userPassword, ...userPayload } = user;
  const token = jwt.sign({ payload: userPayload }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
};

module.exports = {
  loginController,
};