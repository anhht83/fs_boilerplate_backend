import express from "express";
import { bid } from "../../validations/bid.validation";
import { validate } from "../../utils/validation";
import { authorize } from "../../middlewares/auth.middleware";
import controller from "../../controllers/bid.controller";

const router = express.Router();

/**
 * @swagger
 * /v1/bids:
 *   post:
 *     summary: Submit a bit
 *     tags: [Bid]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Bid"
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *                 type: string
 *                 example: Success!
 */
router.route("/").post(authorize(), validate(bid), controller.bid);

export default router;
