const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });

  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const checkIfExists = async (arrayOfIds) => {
  const checked = await Category.findAndCountAll({
    where: { id: arrayOfIds },
  });

  if (arrayOfIds.length !== checked.count) {
    return { message: 'one or more "categoryIds" not found' };
  }

  return checked;
};

module.exports = {
  createCategory,
  getAllCategories,
  checkIfExists,
};