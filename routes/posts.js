const express = require("express");
const router = express.Router();


const { home , getAllUsers, addUser} = require("../controllers/posts");




router.route('/create_post').post(createPost);
router.route('/update_post/:id').put(updatePost);
router.route('/delete_post/:id').delete(deletePost);


module.exports = router;
