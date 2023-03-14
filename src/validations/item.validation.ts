import Joi from "joi";

export const create = {
  body: Joi.object({
    name: Joi.string().required(),
    startPrice: Joi.number().min(0).required(),
    windowTime: Joi.date().required()
  })
};