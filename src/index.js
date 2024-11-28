const app = require("./app");
const databaseConnection = require("./config/database");
require("dotenv").config();

/** ERROR HANDLE */
process.on("uncaughtException", (err) => {
  console.log("un caught exception errors", err);
  process.exit(1);
});
/** DATABASE IS CONNECTED */

databaseConnection();

const server = app.listen(process.env.PORT, () => {
  console.log("Server running at " + process.env.PORT);
});

process.on("unhandledRejection", (err) => {
  console.log("un handled rejection errors", err);
  server.close(() => process.exit(1));
});
process.on("SIGTERM", () => {
  server.close(() => console.log("terminated process"));
});
