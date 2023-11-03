const { BlogPost, User, Category } = require('../models');

const createPost = async (userId, { title, content }) => {
  const blogPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  return blogPost;
};

const getAllPosts = async (userId) => {
  const posts = await BlogPost.findAll({
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: ['userId'] },
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
};
