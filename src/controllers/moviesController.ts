import { Request, Response } from "express";
import { Movie, MovieUpdate, Status } from "../protocols";
import {
  checkGender,
  checkName,
  checkPlatform,
  checkType,
  deleteMovieById,
  get,
  getPlatform,
  insert,
  insertStatus,
  updateBoth,
  updateRating,
  updateStatusId,
} from "../repositories/moviesRepository.js";

async function insertNewMovie(req: Request, res: Response) {
  const body = res.locals.body as Movie;

  try {
    const genderNotExist = (await checkGender(body.gender_Id)).rowCount < 1;
    if (genderNotExist) {
      return res.status(400).send({ error: "This gender doesn't exist" });
    }
    const platformNotExist =
      (await checkPlatform(body.platform_Id)).rowCount < 1;
    if (platformNotExist) {
      return res.status(400).send({ error: "This platform doesn't exist" });
    }

    const checkMovieName = (await checkName(body.name)).rowCount > 0;

    if (checkMovieName) {
      return res
        .status(400)
        .send({ error: "This movie is already in our system" });
    }

    await insert(body);
    return res.status(201).send({ message: "created" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
}

async function getMovies(req: Request, res: Response) {
  try {
    const movies = (await get()).rows;
    return res.status(200).send(movies);
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function deleteMovies(req: Request, res: Response) {
  const id = res.locals.id as number;

  try {
    await deleteMovieById(Number(id));

    return res.status(201).send({ message: "Movie deleted." });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function updateMovies(req: Request, res: Response) {
  const id = res.locals.id as number;
  const { rating, status_id }: MovieUpdate = req.body;

  try {
    if (!rating && !status_id) {
      return res.status(400).send({ error: "No data received." });
    }

    if (rating && !status_id) {
      await updateRating(rating, id);
      return res.status(200).send({ message: "rating updated." });
    }

    if (status_id && !rating) {
      await updateStatusId(status_id, id);
      return res.status(200).send({ message: "status updated." });
    }

    await updateBoth(rating, status_id, id);
    return res.status(200).send({ message: "Status and rating updated." });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function getMoviesPlatform(req: Request, res: Response) {
  try {
    const data = await getPlatform();

    return res.status(200).send(data.rows);
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function createStatus(req: Request, res: Response) {
  const body = res.locals.body as Status;

  try {
    const statusExist = (await checkType(body.type)).rowCount > 0;

    if (statusExist) {
      return res.status(400).send({ message: "This status already exist." });
    }

    await insertStatus(body.type);
    return res.status(201).send({ message: "Status created." });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export {
  insertNewMovie,
  getMovies,
  deleteMovies,
  updateMovies,
  getMoviesPlatform,
  createStatus,
};
