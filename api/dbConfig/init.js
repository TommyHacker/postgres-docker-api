const { Pool } = require('pg');

const pool = new Pool({ database: process.env.POSTGRES_DB });

module.exports = pool;
