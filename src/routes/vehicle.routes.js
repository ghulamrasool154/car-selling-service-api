const express = require("express");
const {
  getVehicle,
  addVehicle,
} = require("../controllers/vehicle.controllers");
const router = express.Router();

router.route("/").get(getVehicle).post(addVehicle);

module.exports = router;
