import express from "express";
import authRoutes from "./auth.route";
import itemRoutes from "./item.route";
import depositRoutes from "./deposit.route";
import bidRoutes from "./bid.route";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/items", itemRoutes);
router.use("/deposits", depositRoutes);
router.use("/bids", bidRoutes);

export default router;
