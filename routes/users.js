const express = require("express");
const router = express.Router();


const { home , getAllUsers, addUser} = require("../controllers/users");

router.route("/").get(home);
router.route("/get_users").get(getAllUsers);
router.route("/add_user").post(addUser);



module.exports = router;
