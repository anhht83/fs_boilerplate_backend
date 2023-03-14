import express from "express";
import docsRoutes from "./docs.route";
import routesV1 from "./v1";

const { apiLimiter } = require("../middlewares/rateLimit.middleware");
// const vars = require("../config/vars.js");

const router = express.Router();
// apply rate limit to all api
router.use("/", apiLimiter);

/**
 * GET docs
 */
//if (vars.env !== "production") {
  router.use("/docs", docsRoutes);
//}

router.use("/v1", routesV1);

export default router;
