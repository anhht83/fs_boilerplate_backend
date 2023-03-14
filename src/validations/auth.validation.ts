import Joi from "joi";

export const register = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(128).required()
  })
};
export const login = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(128).required()
  })
};
