const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const checkUser = await User.findOne({ where: { email } });
  
  if (checkUser) {
    return null;
  }

  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return null;

  return user;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};