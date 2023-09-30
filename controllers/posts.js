
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = async (req, res) => {
    const postData = req.body; // Retrieve post data from the request body
  
    try {
      const newPost = await prisma.post.create({
        data: postData,
      });
  
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  

  const updatePost = async (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPostData = req.body; // Retrieve updated post data from the request body
  
    try {
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: updatedPostData,
      });
  
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  const deletePost = async (req, res) => {
    const postId = parseInt(req.params.id);
  
    try {
      await prisma.post.delete({
        where: { id: postId },
      });
  
      res.status(204).send(); // Respond with a 204 No Content status on successful deletion
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
  module.exports = {
    createPost,
    updatePost,
    deletePost
}