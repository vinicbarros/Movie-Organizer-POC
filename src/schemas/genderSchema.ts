import Joi from "joi";

const genderSchema = Joi.object({
  name: Joi.string().required(),
});

export default genderSchema;
