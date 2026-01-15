//TODO: Set up a db pool

// imports
import dotenv from "dotenv";
import pg from "pg";

// config dotenv
dotenv.config();

//create a pool with pg
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export { db };
