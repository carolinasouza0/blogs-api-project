const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env;

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
    
  const user = await userService.createUser(displayName, email, password, image);
 
  if (!user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const { password: userPassword, ...userPayload } = user;
  const token = jwt.sign({ payload: userPayload }, JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({ token });
};

module.exports = {
  createUser,
};