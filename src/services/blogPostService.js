const { Op } = require('sequelize');
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

const getPostById = async (postId, userId) => {
  const post = await BlogPost.findByPk(postId, {
    where: { userId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { message: 'Post does not exist' };

  return post;
};

const updatePost = async (id, { title, content }) => {
  const [postUpdated] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  if (!postUpdated) return { error: true, message: 'Unauthorized user' };

  return postUpdated;
};

const deletePost = async (postId, userId) => {
  const findPost = await BlogPost.findOne({ where: { id: postId } });

  if (!findPost) return { error: true, message: 'Post does not exist' };

  if (findPost.dataValues.userId !== userId) {
    return { error: true, message: 'Unauthorized user' };
  }

  await BlogPost.destroy({ where: { id: postId } });

  return findPost;
};

const searchPosts = async (searchTerm) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { content: { [Op.like]: `%${searchTerm}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPosts,
};
