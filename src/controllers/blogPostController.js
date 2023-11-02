const blogPostService = require('../services/blogPostService');
const categoryService = require('../services/categoryService');
const { createPostCategories } = require('../services/postCategoryService');

const createPost = async (req, res) => {
  const { dataValues } = req.user;
  const { id } = dataValues;
  const { title, content, categoryIds } = req.body;
    
  const checked = await categoryService.checkIfExists(categoryIds);
  if (checked.message) return res.status(400).json({ message: checked.message });

  const blogPost = await blogPostService.createPost(id, { title, content });
  console.log(blogPost);
  await createPostCategories(blogPost.id, checked.rows);
    
  return res.status(201).json(blogPost);
};

module.exports = {
  createPost,
};