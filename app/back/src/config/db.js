const { Pool } = require('pg');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);



const pool = new Pool({
  user: process.env.PG_USER || 'root',
  host: process.env.PG_HOST || '100.64.225.93',
  database: process.env.PG_DATABASE || 'voidvault',
  password: process.env.PG_PASSWORD || 'root',
  port: process.env.PG_PORT || 5432,
});

const sessionStore = new pgSession({
  pool: pool,
  tableName: 'session'   // Use 'session' table in PostgreSQL for storing sessions
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the PostgreSQL database');
  }
});

module.exports = { pool, sessionStore };
