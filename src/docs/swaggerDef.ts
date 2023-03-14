const config = require('../../src/config/vars');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Project Name',
    version: config.version,
    license: {
      name: 'HTA',
      url: '',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}`,
    },
  ],
};

module.exports = swaggerDef;
