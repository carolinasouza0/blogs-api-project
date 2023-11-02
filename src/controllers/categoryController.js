const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.createCategory(name);

  if (category.error) {
    return res.status(400).json(category.message);
  }
  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};