import express from "express";
import { create } from "../../validations/item.validation";
import { validate } from "../../utils/validation";
import { authorize } from "../../middlewares/auth.middleware";
import controller from "../../controllers/item.controller";

const router = express.Router();

/**
 * @swagger
 * /v1/items:
 *   get:
 *     summary: List items
 *     tags: [Item]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#components/schemas/Item"
 */
router.route("/").get(authorize(), controller.index);

/**
 * @swagger
 * /v1/items:
 *   post:
 *     summary: Create item
 *     tags: [Item]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/Item"
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: "#components/schemas/Item"
 */
router.route("/").post(authorize(), validate(create), controller.create);

export default router;
