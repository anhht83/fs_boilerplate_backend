const path = require("path");
const fs = require('fs')

const nodeEnv = process.env.NODE_ENV || "development";
// import .env variables
let envFile = path.join(__dirname, `../../.env.${nodeEnv}`);
if(!fs.existsSync(envFile)){
  envFile = path.join(__dirname, `../../.env`);
}
require("dotenv").config({
  path: envFile
});


module.exports = {
  version: process.env.VERSION,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  jwtRefreshExpirationInterval: process.env.JWT_REFRESH_EXPIRATION_MINUTES,
  database: {
    client: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
  },
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev"
};
