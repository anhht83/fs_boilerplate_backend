import { Request, Response } from "express";

const rateLimitMiddleware = require("express-rate-limit");

const handler = (request: Request, response: Response, next: any, options: any) =>
  response.status(options.statusCode).json({
    code: options.statusCode,
    message: options.message
  });

exports.apiLimiter = rateLimitMiddleware({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 1000, // Limit each IP to 1000 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: handler
});