const createHttpError = require("http-errors");
const tryCatch = require("../utils/try-catch");
const { validateVehicle, Vehicle } = require("../model/vehicle.model");

exports.getVehicle = tryCatch(async (req, res, next) => {
  const vehicle = await Vehicle.find();
  return res.status(200).json({
    success: true,
    message: "get vehicle lists successfully",
    data: {
      total: vehicle.length,
      data: vehicle,
    },
  });
});

exports.addVehicle = tryCatch(async (req, res, next) => {
  const { error } = validateVehicle(req.body);

  if (error) {
    return next(new createHttpError.Forbidden(error.details[0].message));
  }

  const { pictures, maxPictures } = req.body;
  if (pictures.length > maxPictures) {
    let msg = `You can upload a maximum of ${maxPictures} pictures.`;
    return next(new createHttpError.BadRequest(msg));
  }

  const vehicle = await Vehicle.create(req.body);

  return res.status(201).json({
    success: true,
    message: "add vehicle  successfully",
    data: {
      data: vehicle,
    },
  });
});
