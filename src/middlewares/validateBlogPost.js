const Joi = require('joi');

const validatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const validatePostUpdateSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

const validatePost = (req, res, next) => {
  const { error } = validatePostSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validatePostUpdate = (req, res, next) => {
  const { error } = validatePostUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {
  validatePost,
  validatePostUpdate,
};
