const { User } = require('../models');

const login = async (email, pass) => {
  const user = await User.findOne({ 
    where: { email, password: pass },
    attributes: { exclude: ['displayName', 'image'] },
  });

  if (!user || user.password !== pass) {
    return null;
  }

  return user;
};

module.exports = {
  login,
};
