//const path = require("path");
//const APP_ROOT = path.resolve(__dirname);

const node_environment = process.env.NODE_ENV || "development";

if (node_environment === "development") {
  require("dotenv").config();
}

module.exports = {
  database: "projeto02",
  username: "root",
  host: "localhost",
  dialect: "mysql",
  operatorAliases: false,
  logging: false,
};
