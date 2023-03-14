import Joi from "joi";

export const bid = {
  body: Joi.object({
    itemId: Joi.number().required(),
    amount: Joi.number().min(0).required()
  })
};