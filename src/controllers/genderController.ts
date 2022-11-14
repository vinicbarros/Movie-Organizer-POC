import { Request, Response } from "express";
import { Gender } from "../protocols.js";
import {
  checkGender,
  insertGender,
} from "../repositories/gendersRepository.js";

async function createGender(req: Request, res: Response) {
  const body = res.locals.body as Gender;

  try {
    const genderExist = (await checkGender(body.name)).rowCount > 0;

    if (genderExist) {
      return res.status(400).send({ message: "This gender already exist." });
    }

    await insertGender(body.name);
    return res.status(201).send({ message: "Gender created." });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { createGender };
