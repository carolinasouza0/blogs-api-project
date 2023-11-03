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

const getAllPosts = async (req, res) => {
  const { dataValues } = req.user;
  const { id } = dataValues;

  const posts = await blogPostService.getAllPosts(id);
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { dataValues } = req.user;
  const { id: userId } = dataValues;

  const post = await blogPostService.getPostById(id, userId);
  if (post.message) return res.status(404).json({ message: post.message });
  // console.log('entrou aqui no CONSOLE', post);

  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { dataValues } = req.user;

  const postId = await blogPostService.updatePost(id, { title, content });
  if (postId.message) return res.status(401).json({ message: postId.message });

  const updatedPost = await blogPostService.getPostById(id, dataValues.id);
  // console.log('entrou aqui no CONSOLE', id, dataValues.id, updatedPost);

  return res.status(200).json(updatedPost);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,  
  updatePost,
};