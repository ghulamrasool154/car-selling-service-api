const express = require("express");
const routes = require("./routes");
const createHttpError = require("http-errors");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const errorMiddleware = require("./middleware/error-middleware");

// MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// ROUTES
app.use("/api/v1/", routes);

// NOT FOUND ROUTE
app.all("*", (req, res, next) => {
  next(createHttpError.NotFound("Not Found" + req.originalUrl));
});

// GLOBAL ERROR MIDDLEWARE
app.use(errorMiddleware);

module.exports = app;
