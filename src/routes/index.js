const express = require("express");
const routes = express.Router();
const userRoutes = require("./user.routes.js");
const vehicleRoutes = require("./vehicle.routes.js");

routes.use("/auth", userRoutes);
routes.use("/vehicle", vehicleRoutes);

module.exports = routes;
