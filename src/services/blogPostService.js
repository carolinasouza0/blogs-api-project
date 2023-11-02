const { BlogPost } = require('../models');

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

module.exports = {
  createPost,
};
