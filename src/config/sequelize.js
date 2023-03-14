const vars = require("./vars");
module.exports = {
  development: {
    username: vars.database.user,
    password: vars.database.password,
    database: vars.database.name,
    host: vars.database.host,
    port: vars.database.port,
    dialect: vars.database.client
  },

  test: {
    username: vars.database.user,
    password: vars.database.password,
    database: vars.database.name,
    host: vars.database.host,
    port: vars.database.port,
    dialect: vars.database.client
  },

  production: {
    username: vars.database.user,
    password: vars.database.password,
    database: vars.database.name,
    host: vars.database.host,
    port: vars.database.port,
    dialect: vars.database.client
  }

};