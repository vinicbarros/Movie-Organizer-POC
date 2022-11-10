import pkg from "pg";
var Pool = pkg.Pool;
var config = {
    connectionString: process.env.DATABASE_URL
};
var db = new Pool(config);
export default db;
