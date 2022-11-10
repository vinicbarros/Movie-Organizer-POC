import Joi from "joi";
var movieSchema = Joi.object({
    name: Joi.string().required(),
    gender_Id: Joi.number(),
    platform_Id: Joi.number(),
    status_Id: Joi.number().valid(1, 2, 3).required()
});
export default movieSchema;
