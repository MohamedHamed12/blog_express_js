// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const home = (req, res) => {
    res.send('Hello, this is the home page! ccc');
}

const getAllUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users); // Respond with a 200 status code and JSON data
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Internal Server Error' }); // Respond with a 500 status code and an error message
    }
  };

  
  const addUser = async (req, res) => {
    const userData = req.body; // Retrieve user data from the request body
    // console.log(req.body);
    try {
      const newUser = await prisma.user.create({
        data: userData,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };




  const updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUserData = req.body; // Retrieve updated user data from the request body
  
    try {
      // Use Prisma to update the user
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatedUserData,
      });
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);
  
    try {
      // Use Prisma to delete the user
      await prisma.user.delete({
        where: { id: userId },
      });
  
      res.status(204).send(); // Respond with a 204 No Content status on successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    home, getAllUsers, addUser , updateUser, deleteUser
}