const Joi = require("joi");
const mongoose = require("mongoose");

const schemaVehicle = new mongoose.Schema(
  {
    model: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true },
    phone: { type: String, required: true, match: /^\d{11}$/ },
    city: { type: String, required: true },
    maxPictures: { type: Number, required: true, min: 1, max: 10 },
    pictures: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

function validateVehicle(vehicle) {
  const schema = Joi.object({
    model: Joi.string().min(3).required(),
    price: Joi.number().required(),
    phone: Joi.string()
      .pattern(/^\d{11}$/)
      .required(),
    city: Joi.string().required(),
    maxPictures: Joi.number().min(1).max(10).required(),
    pictures: Joi.array().items(Joi.string().uri()).required(),
    user: Joi.string().required(),
  });
  return schema.validate(vehicle);
}

const Vehicle = mongoose.model("Vehicle", schemaVehicle);
module.exports = { Vehicle, validateVehicle };
