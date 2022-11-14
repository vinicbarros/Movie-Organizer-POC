import Joi from "joi";

const movieSchema = Joi.object({
  name: Joi.string().required(),
  gender_Id: Joi.number().required(),
  platform_Id: Joi.number().required(),
  status_Id: Joi.number().valid(1, 2, 3).required(),
});

const typeSchema = Joi.object({
  type: Joi.string().required(),
});

export { movieSchema, typeSchema };
