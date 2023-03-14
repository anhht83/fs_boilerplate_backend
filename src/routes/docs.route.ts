import express from "express";

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../docs/swaggerDef");

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: [
    "src/docs/*.yml",
    "src/docs/*/*.yml",
    "src/routes/*.ts",
    "src/routes/*.js",
    "src/routes/**/*.ts",
    "src/routes/**/*.js"
  ]
});

router.use("/", swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true
}));

export default router;
