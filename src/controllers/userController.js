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

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { dataValues } = req.user;
  const { id } = dataValues;

  await userService.deleteUser(id);

  res.sendStatus(204);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};