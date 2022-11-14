import { QueryResult } from "pg";
import db from "../database/database.js";
import { PlatformEntity } from "../protocols.js";

async function checkPlatform(
  name: string
): Promise<QueryResult<PlatformEntity>> {
  return await db.query(`SELECT * FROM platform WHERE name = $1;`, [name]);
}

async function insertPlatform(name: string) {
  return await db.query(`INSERT INTO platform (name) VALUES ($1);`, [name]);
}

export { checkPlatform, insertPlatform };
