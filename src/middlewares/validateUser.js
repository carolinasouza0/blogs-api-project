const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'array.min': '"displayName" length must be at least 8 characters long',
    'string.empty': 'Some required fields are missing',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().min(6).required().messages({
    'array.min': '"password" length must be 6 characters long',
    'string.empty': 'Some required fields are missing',
  }),
  image: Joi.string(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  console.log(error);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateUser;
