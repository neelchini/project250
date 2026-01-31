// config/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// Use environment variables for everything
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD, // use env variable
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Async function to check connectivity
async function testConnection() {
  try {
    const [row] = await db.query("SELECT 1 AS ok");
    console.log("✅ Connected to MySQL pool:", row?.[0]?.ok === 1 ? "ok" : "unknown");
  } catch (e) {
    console.error("❌ Database pool init failed:", e.message);
  }
}

// Run the test immediately
testConnection();

export default db;
export { db as pool };
