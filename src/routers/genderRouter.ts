import { Router } from "express";
import { createGender } from "../controllers/genderController.js";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import genderSchema from "../schemas/genderSchema.js";

const genderRouter = Router();

genderRouter.post("/gender", schemaMiddleware(genderSchema), createGender);

export default genderRouter;
