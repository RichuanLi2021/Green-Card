const mysql = require('mysql2');
const env = require('./env');

const pool = mysql.createPool({
  database: env.DB_DATABASE,
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();