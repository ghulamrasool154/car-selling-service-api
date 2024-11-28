const express = require("express");
const { login } = require("../controllers/usercontrollers");
const router = express.Router();

router.route("/").post(login);

module.exports = router;
