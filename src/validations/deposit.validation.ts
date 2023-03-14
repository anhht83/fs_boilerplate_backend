import Joi from "joi";

export const create = {
  body: Joi.object({
    amount: Joi.number().min(0).required()
  })
};