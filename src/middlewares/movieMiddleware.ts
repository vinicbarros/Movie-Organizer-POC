import { NextFunction, Request, Response } from "express";
import { getMovieById } from "../repositories/moviesRepository.js";

const movieMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;

  try {
    const idValid = (await getMovieById(Number(id))).rowCount;
    if (idValid < 1) {
      return res.status(400).send({ error: "This movie doesn't exist" });
    }
    res.locals.id = Number(id);
    next();
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export default movieMiddleware;
