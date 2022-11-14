import Joi from "joi";

const platformSchema = Joi.object({
  name: Joi.string().required(),
});

export default platformSchema;
