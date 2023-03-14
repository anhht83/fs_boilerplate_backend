// make bluebird default Promise
// require('bluebird'); // eslint-disable-line no-global-assign
import * as http from "http";
import logger from "./config/logger";
import app from "./config/express";

const vars = require("./config/vars");

const server = http.createServer(app);
export const io = require("./config/socket")(server);

server.listen(vars.port, () => logger.info(`server started on port ${vars.port} (${vars.env})`));

/**
 * Exports express
 * @public
 */
module.exports = app;
