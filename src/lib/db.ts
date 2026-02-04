import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.databaseURL,
  ssl: {
    rejectUnauthorized: false, // AWS RDS ke liye required hota hai
  },
});
export default pool;