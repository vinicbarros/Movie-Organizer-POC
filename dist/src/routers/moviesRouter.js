import { Router } from "express";
import { insertNewMovie } from "../controllers/moviesController.js";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import movieSchema from "../schemas/movieSchema";
var moviesRouter = Router();
moviesRouter.post("/movies", schemaMiddleware(movieSchema), insertNewMovie);
export default moviesRouter;
