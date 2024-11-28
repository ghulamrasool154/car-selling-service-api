const tryCatch = require("../utils/try-catch");

exports.home = tryCatch(async (req, res, next) => {
  return res.status(200).json({
    status: 200,
    success: true,
    message: "Welcome to car service api",
  });
});
