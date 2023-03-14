import express from "express";
import { register } from "../../validations/auth.validation";
import { validate } from "../../utils/validation";

import controller from "../../controllers/auth.controller";

const router = express.Router();

/**
 * @swagger
 * /v1/auth/register:
 *   post:
 *     summary: Register by form
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/AuthRegister"
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#components/schemas/User"
 *       "400":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#components/responses/Error"
 *             example:
 *               code: 400
 *               message: "Validation Error"
 *               errors: [
 *                {
 *                  "field": "email",
 *                  "location": "body",
 *                  "messages": [
 *                      "\"email\" is required"
 *                  ],
 *                  "types": [
 *                    "any.required"
 *                  ]
 *                 },
 *                 {
 *                  "field": "password",
 *                  "location": "body",
 *                  "messages": [
 *                      "\"password\" is required"
 *                  ],
 *                  "types": [
 *                    "any.required"
 *                  ]
 *                 }
 *               ]
 */
router.route("/register").post(validate(register), controller.register);

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     summary: Login form
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#components/schemas/AuthPostLogin"
 *     responses:
 *       "200":
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#components/schemas/User"
 *       "400":
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#components/responses/Error"
 *             example:
 *               code: 400
 *               message: "Validation Error"
 *               errors: [
 *                {
 *                  "field": "email",
 *                  "location": "body",
 *                  "messages": [
 *                      "\"email\" is required"
 *                  ],
 *                  "types": [
 *                    "any.required"
 *                  ]
 *                 },
 *                 {
 *                  "field": "password",
 *                  "location": "body",
 *                  "messages": [
 *                      "\"password\" is required"
 *                  ],
 *                  "types": [
 *                    "any.required"
 *                  ]
 *                 }
 *               ]
 */
router.route("/login").post(validate(register), controller.login);
export default router;
