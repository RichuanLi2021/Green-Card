const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool({
  database: config.database,
  host: config.db_host,
  port: config.db_port,
  user: config.db_username,
  password: config.db_password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();