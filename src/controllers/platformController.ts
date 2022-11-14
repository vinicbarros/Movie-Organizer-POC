import { Request, Response } from "express";
import { Platform } from "../protocols.js";
import {
  checkPlatform,
  insertPlatform,
} from "../repositories/platformsRepository.js";

async function createPLatform(req: Request, res: Response) {
  const body = res.locals.body as Platform;

  try {
    const platformExist = (await checkPlatform(body.name)).rowCount > 0;

    if (platformExist) {
      return res.status(400).send({ message: "This platform already exist." });
    }

    await insertPlatform(body.name);
    return res.status(201).send({ message: "Platform created." });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { createPLatform };
