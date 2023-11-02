const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

function validate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(extractToken(token), JWT_SECRET);
    req.user = decoded.payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = {
  validate,
};
