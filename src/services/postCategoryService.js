const { PostCategory } = require('../models');

const createPostCategories = async (postId, categoryIds) => {
  const arrayInsert = categoryIds
    .map((item) => item.dataValues.id)
    .map((categoryId) => ({ postId, categoryId }));
    
  const postCategory = await PostCategory.bulkCreate(arrayInsert);
  return postCategory;
};

module.exports = {
  createPostCategories,
};
