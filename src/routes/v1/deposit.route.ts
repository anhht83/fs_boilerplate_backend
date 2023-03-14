import express from "express";
import { create } from "../../validations/deposit.validation";
import { validate } from "../../utils/validation";
import { authorize } from "../../middlewares/auth.middleware";
import controller from "../../controllers/deposit.controller";

const router = express.Router();

/**
 * @swagger
 * /v1/deposits/total:
 *   get:
 *     summary: Total deposit amount
 *     tags: [Fund]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: number
 *                   example: 100.0
 */
router.route("/total").get(authorize(), controller.totalAmount);

/**
 * @swagger
 * /v1/deposits:
 *   post:
 *     summary: Add deposit
 *     tags: [Fund]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                amount:
 *                  type: number
 *                  example: 100.0
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: number
 *                   example: 100.0
 */
router.route("/").post(authorize(), validate(create), controller.add);

export default router;
