const express = require("express");
const { login, getUsers } = require("../controllers/user.controllers");
const router = express.Router();

router.route("/").post(login).get(getUsers);

module.exports = router;
