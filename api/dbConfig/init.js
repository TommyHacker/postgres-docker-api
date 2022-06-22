const { Pool } = require("pg");

const db = new Pool({ database: process.env.PGDATABASE });

module.exports = db;
