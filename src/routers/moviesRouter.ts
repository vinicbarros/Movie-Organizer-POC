import { Router } from "express";
import {
  createStatus,
  deleteMovies,
  getMovies,
  getMoviesPlatform,
  insertNewMovie,
  updateMovies,
} from "../controllers/moviesController.js";
import movieMiddleware from "../middlewares/movieMiddleware.js";
import { schemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { movieSchema, typeSchema } from "../schemas/movieSchema.js";

const moviesRouter = Router();

moviesRouter
  .post("/movies", schemaMiddleware(movieSchema), insertNewMovie)
  .post("/status", schemaMiddleware(typeSchema), createStatus)
  .get("/movies", getMovies)
  .get("/movies/platform", getMoviesPlatform)
  .delete("/movies/:id/delete", movieMiddleware, deleteMovies)
  .put("/movies/:id/update", movieMiddleware, updateMovies);

export default moviesRouter;
