import { Router } from "express";
import { createPLatform } from "../controllers/platformController.js";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import platformSchema from "../schemas/platformSchema.js";

const platformRouter = Router();

platformRouter.post(
  "/platform",
  schemaMiddleware(platformSchema),
  createPLatform
);

export default platformRouter;
