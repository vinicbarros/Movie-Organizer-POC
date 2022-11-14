import { QueryResult } from "pg";
import db from "../database/database.js";
import { GenderEntity } from "../protocols.js";

async function checkGender(name: string): Promise<QueryResult<GenderEntity>> {
  return await db.query(`SELECT * FROM gender WHERE name = $1;`, [name]);
}

async function insertGender(name: string) {
  return await db.query(`INSERT INTO gender (name) VALUES ($1);`, [name]);
}

export { checkGender, insertGender };
