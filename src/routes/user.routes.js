const express = require("express");
const { login, getUsers } = require("../controllers/usercontrollers");
const router = express.Router();

router.route("/").post(login).get(getUsers);

module.exports = router;
