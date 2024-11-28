const createHttpError = require("http-errors");
const tryCatch = require("../utils/try-catch");
const User = require("../model/user.model");

exports.login = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new createHttpError.NotFound("Please provide email and password!")
    );
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || user.password !== password) {
    return next(new createHttpError.BadRequest("Incorrect email or password"));
  }
  return res.status(200).json({
    success: true,
    message: "successfully login",
    data: {
      data: user,
    },
  });
});

exports.getUsers = tryCatch(async (req, res, next) => {
  const users = await User.find();
  return res.status(200).json({
    success: true,
    message: "ok",
    data: users,
  });
});
