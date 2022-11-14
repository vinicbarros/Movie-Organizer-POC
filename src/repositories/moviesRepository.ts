import { QueryResult } from "pg";
import db from "../database/database.js";
import {
  Movie,
  MovieEntity,
  MoviesPlatformEntity,
  StatusEntity,
} from "../protocols";

async function insert(movie: Movie) {
  return await db.query(
    `INSERT INTO movies (name, gender_Id, platform_Id, status_Id, rating) VALUES ($1, $2, $3, $4, $5);`,
    [
      movie.name,
      movie.gender_Id,
      movie.platform_Id,
      movie.status_Id,
      movie.rating,
    ]
  );
}

async function get() {
  return await db.query(`SELECT movies.id, movies.name AS "name", j1.name AS "gender", j2.name AS "platform", j3.type AS "status", movies.rating FROM movies
    JOIN gender AS j1 ON movies.gender_id = j1.id
    JOIN platform AS j2 ON movies.platform_id = j2.id
    JOIN status AS j3 ON movies.status_id = j3.id`);
}

async function getMovieById(id: number): Promise<QueryResult<MovieEntity>> {
  return await db.query(` SELECT * FROM movies WHERE id = $1;`, [id]);
}

async function deleteMovieById(id: number) {
  return await db.query(` DELETE FROM movies WHERE id = $1;`, [id]);
}

async function checkGender(id: number) {
  return await db.query(`SELECT * FROM gender WHERE id = $1;`, [id]);
}

async function checkPlatform(id: number) {
  return await db.query(`SELECT * FROM platform WHERE id = $1;`, [id]);
}

async function checkName(name: string) {
  return await db.query(`SELECT * FROM movies WHERE name = $1;`, [name]);
}

async function updateRating(rate: number, id: number) {
  return await db.query(`UPDATE movies SET rating = $1 WHERE id = $2;`, [
    rate,
    id,
  ]);
}

async function updateStatusId(status_id: number, id: number) {
  return await db.query(`UPDATE movies SET status_id = $1 WHERE id = $2;`, [
    status_id,
    id,
  ]);
}

async function updateBoth(rate: number, status_id: number, id: number) {
  return await db.query(
    `UPDATE movies SET rating = $1, status_id = $2 WHERE id = $3;`,
    [rate, status_id, id]
  );
}

async function getPlatform(): Promise<QueryResult<MoviesPlatformEntity>> {
  return await db.query(`
  SELECT platform.name, COALESCE(COUNT(j1.*), 0)::int AS "movie_count",
  CASE WHEN COUNT(j1.*) = 0 THEN '[]' ELSE
	json_agg(
		json_build_object(
			'id', j1.id, 'name', j1.name, 'gender', j2.name, 'rating', j1.rating
		)
	) END AS "movies"
  FROM platform
  LEFT JOIN movies AS j1 ON platform.id = j1.platform_id
  LEFT JOIN gender AS j2 ON j1.gender_id = j2.id
  GROUP BY platform.name`);
}

async function checkType(type: string): Promise<QueryResult<StatusEntity>> {
  return await db.query(`SELECT * FROM status WHERE type = $1;`, [type]);
}

async function insertStatus(type: string) {
  return await db.query(`INSERT INTO status (type) VALUES ($1);`, [type]);
}

export {
  insert,
  get,
  checkGender,
  checkPlatform,
  getMovieById,
  deleteMovieById,
  updateRating,
  updateStatusId,
  updateBoth,
  checkName,
  getPlatform,
  checkType,
  insertStatus,
};
