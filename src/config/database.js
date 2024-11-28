const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.error("mongoDB connection error"));
};

module.exports = databaseConnection;
