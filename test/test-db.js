import "dotenv/config";
import { pool } from "../src/config/dbs/postgres.js";

// const pool = require("./src/config/db");

// import {pool} from "./src/config/dbs/postgres.js";

async function testConnection() {
  try {

    const result = await pool.query(`
      SELECT
        current_database() AS database,
        current_user AS username,
        NOW() AS connected_at
    `);

    console.log("PostgreSQL connected successfully!");
    console.log(result.rows[0]);
  } catch (error) {
    console.error("PostgreSQL connection failed:", error.message);
  } finally {
    await pool.end();
  }
}

testConnection();
